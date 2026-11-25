# Render the DYCH line illustrations in the site's two styles.
# Usage: python3 scripts/recolour-illustrations.py public/illustrations/source-violet public/illustrations
#
#   <name>.png       "Teal and amber", for light sections and cream cards
#   dark/<name>.png  "Night", for dark teal sections
#
# Both: closed shapes filled solid, the original shading in a second colour,
# a heavier line, a disc behind, and a flat offset shadow under the filled
# areas only (so open strokes are never doubled). Change the colours below
# and re-run to restyle the whole set.
import sys, glob, os
from PIL import Image, ImageFilter, ImageDraw, ImageChops

SRC, OUT = sys.argv[1], sys.argv[2]
SIZE = 1200

STYLES = {
    "": dict(line="#042c33", shape="#cde8e3", shade="#f0a33c", disc="#f9d39a", shadow="#7fb7ae"),
    "dark": dict(line="#f7e7ce", shape="#156373", shade="#f2a83b", disc="#0b3f47", shadow="#031f24"),
}


def rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def masks(path):
    a = Image.open(path).convert("RGBA").getchannel("A")
    # Lines: anything reasonably opaque, pushed to full strength.
    line = a.point(lambda v: 0 if v < 60 else min(255, int((v - 60) * 255 / 70)))
    # Shading: the flat translucent tint areas, minus the anti-aliased fringe.
    shade = a.point(lambda v: 255 if 4 <= v < 100 else 0).filter(ImageFilter.MedianFilter(5))
    shade = ImageChops.subtract(shade, line)
    # Closed shapes: non-line pixels the outside cannot reach without crossing
    # a line, found by flood-filling from a padded border.
    hard = line.point(lambda v: 255 if v > 90 else 0).filter(ImageFilter.MaxFilter(3))
    pad = Image.new("L", (a.width + 4, a.height + 4), 0)
    pad.paste(hard, (2, 2))
    ImageDraw.floodfill(pad, (0, 0), 128)
    outside = pad.crop((2, 2, a.width + 2, a.height + 2)).point(lambda v: 255 if v == 128 else 0)
    shape = ImageChops.subtract(ImageChops.invert(outside), hard)
    return line, shade, shape


def layer(size, colour, mask):
    im = Image.new("RGBA", size, rgb(colour) + (0,))
    im.putalpha(mask)
    return im


def render(line, shade, shape, o):
    size = line.size
    solid = ImageChops.lighter(shape, shade).filter(ImageFilter.MaxFilter(5))
    art = Image.new("RGBA", size, (0, 0, 0, 0))
    art = Image.alpha_composite(art, layer(size, o["shape"], shape))
    art = Image.alpha_composite(art, layer(size, o["shade"], shade))
    art = Image.alpha_composite(art, layer(size, o["line"], line.filter(ImageFilter.MaxFilter(3))))
    bbox = art.getbbox()
    art, solid = art.crop(bbox), solid.crop(bbox)
    box = int(SIZE * 0.70)
    s = min(box / art.width, box / art.height)
    art = art.resize((int(art.width * s), int(art.height * s)), Image.LANCZOS)
    solid = solid.resize(art.size, Image.LANCZOS)
    canvas = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    r, c = int(SIZE * 0.46), SIZE // 2
    ImageDraw.Draw(canvas).ellipse((c - r, c - r, c + r, c + r), fill=rgb(o["disc"]) + (255,))
    x, y = (SIZE - art.width) // 2, (SIZE - art.height) // 2
    shadow = Image.new("RGBA", art.size, rgb(o["shadow"]) + (0,))
    shadow.putalpha(solid.point(lambda v: int(v * 0.85)))
    canvas.alpha_composite(shadow, (x + 14, y + 14))
    canvas.alpha_composite(art, (x, y))
    return canvas


for f in sorted(glob.glob(os.path.join(SRC, "*.png"))):
    line, shade, shape = masks(f)
    name = os.path.splitext(os.path.basename(f))[0]
    for sub, o in STYLES.items():
        d = os.path.join(OUT, sub)
        os.makedirs(d, exist_ok=True)
        render(line, shade, shape, o).save(os.path.join(d, name + ".png"), optimize=True)
    print("done", name)
