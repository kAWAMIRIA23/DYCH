# Render the DYCH line illustrations in the site's "bold filled" style.
# Usage: python3 scripts/recolour-illustrations.py public/illustrations/source-violet public/illustrations
# Writes <name>.png (on an amber disc) and plain/<name>.png (no disc).
# Change the colours below to match a different scheme, then re-run.
import sys, glob, os
from PIL import Image, ImageFilter, ImageDraw, ImageChops

SRC, OUT = sys.argv[1], sys.argv[2]
SIZE = 1200
LINE = (4, 44, 51)          # teal ink
SHAPE = (255, 255, 255)     # closed shapes filled solid white
SHADE = (234, 166, 82)      # the original shading, in amber
DISC = (247, 214, 166)      # soft amber disc behind each drawing


def masks(path):
    a = Image.open(path).convert("RGBA").getchannel("A")
    # Lines: anything reasonably opaque, pushed to full strength so faint
    # strokes match the heavy ones.
    line = a.point(lambda v: 0 if v < 60 else min(255, int((v - 60) * 255 / 70)))
    # Shading: the flat translucent tint areas, minus the anti-aliased fringe.
    shade = a.point(lambda v: 255 if 4 <= v < 100 else 0).filter(ImageFilter.MedianFilter(5))
    shade = ImageChops.subtract(shade, line)
    # Closed shapes: every non-line pixel the outside cannot reach without
    # crossing a line, found by flood-filling from a padded border.
    hard = line.point(lambda v: 255 if v > 90 else 0).filter(ImageFilter.MaxFilter(3))
    pad = Image.new("L", (a.width + 4, a.height + 4), 0)
    pad.paste(hard, (2, 2))
    ImageDraw.floodfill(pad, (0, 0), 128)
    outside = pad.crop((2, 2, a.width + 2, a.height + 2)).point(lambda v: 255 if v == 128 else 0)
    shape = ImageChops.subtract(ImageChops.invert(outside), hard)
    return line, shade, shape


def layer(size, rgb, mask):
    im = Image.new("RGBA", size, rgb + (0,))
    im.putalpha(mask)
    return im


def place(art, disc):
    art = art.crop(art.getbbox())
    box = int(SIZE * 0.70)
    s = min(box / art.width, box / art.height)
    art = art.resize((int(art.width * s), int(art.height * s)), Image.LANCZOS)
    canvas = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    if disc:
        r, c = int(SIZE * 0.46), SIZE // 2
        ImageDraw.Draw(canvas).ellipse((c - r, c - r, c + r, c + r), fill=DISC + (255,))
    canvas.alpha_composite(art, ((SIZE - art.width) // 2, (SIZE - art.height) // 2))
    return canvas


os.makedirs(os.path.join(OUT, "plain"), exist_ok=True)
for f in sorted(glob.glob(os.path.join(SRC, "*.png"))):
    line, shade, shape = masks(f)
    size = line.size
    art = Image.new("RGBA", size, (0, 0, 0, 0))
    art = Image.alpha_composite(art, layer(size, SHAPE, shape))
    art = Image.alpha_composite(art, layer(size, SHADE, shade))
    art = Image.alpha_composite(art, layer(size, LINE, line.filter(ImageFilter.MaxFilter(3))))
    name = os.path.splitext(os.path.basename(f))[0]
    place(art, True).save(os.path.join(OUT, name + ".png"), optimize=True)
    place(art, False).save(os.path.join(OUT, "plain", name + ".png"), optimize=True)
    print("done", name)
