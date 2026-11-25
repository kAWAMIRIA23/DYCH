# Recolour the DYCH line illustrations into the site palette.
# Usage: python3 scripts/recolour-illustrations.py public/illustrations/source-violet public/illustrations
# Change LINE, FILL and DISC below to match a different colour scheme, then re-run.
import sys, glob, os
from PIL import Image, ImageFilter, ImageDraw, ImageChops

SRC, OUT = sys.argv[1], sys.argv[2]
LINE = (4, 44, 51)        # teal ink
FILL = (240, 189, 120)    # warm amber tint (between amber and apricot)
DISC = (241, 231, 214)    # cream backdrop
DEEP = (201, 132, 52)     # deep amber for graded shading
SIZE = 1200

os.makedirs(OUT, exist_ok=True)
for f in sorted(glob.glob(os.path.join(SRC, "*.png"))):
    a = Image.open(f).convert("RGBA").getchannel("A")
    # Lines: anything reasonably opaque, pushed to full strength so faint
    # strokes match the heavy ones, with a soft ramp kept for anti-aliasing.
    line = a.point(lambda v: 0 if v < 60 else min(255, int((v - 60) * 255 / 70)))
    # Fills: the flat translucent tint areas. A median filter drops the thin
    # anti-aliased fringe around lines so it does not turn into an amber halo.
    fill = a.point(lambda v: 255 if 4 <= v < 100 else 0).filter(ImageFilter.MedianFilter(5))
    fill = ImageChops.subtract(fill, line)

    art = Image.new("RGBA", a.size, FILL + (0,))
    art.putalpha(fill)
    ink = Image.new("RGBA", a.size, LINE + (255,))
    ink.putalpha(line)
    art = Image.alpha_composite(art, ink)

    # Trim to the drawing, fit into a square canvas over a cream disc.
    bbox = art.getbbox()
    art = art.crop(bbox)
    box = int(SIZE * 0.70)
    scale = min(box / art.width, box / art.height)
    art = art.resize((max(1, int(art.width * scale)), max(1, int(art.height * scale))), Image.LANCZOS)

    for variant in ("disc", "plain"):
        canvas = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
        if variant == "disc":
            d = ImageDraw.Draw(canvas)
            r = int(SIZE * 0.46)
            c = SIZE // 2
            d.ellipse((c - r, c - r, c + r, c + r), fill=DISC + (255,))
        x = (SIZE - art.width) // 2
        y = (SIZE - art.height) // 2
        canvas.alpha_composite(art, (x, y))
        name = os.path.splitext(os.path.basename(f))[0]
        sub = OUT if variant == "disc" else os.path.join(OUT, "plain")
        os.makedirs(sub, exist_ok=True)
        canvas.save(os.path.join(sub, name + ".png"), optimize=True)
    print("done", os.path.basename(f))
