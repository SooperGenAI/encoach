# Cartoon illustrations — unDraw

The SVG files in this directory are **unDraw** illustrations recoloured to brand teal (`#3d8688`).

unDraw is MIT-licensed, no attribution required, by Katerina Limpitsouni. The official site is https://undraw.co.

## Source map

The directory name `cuate/` is preserved from an earlier plan to use Storyset Cuate (Memintel's choice) — kept for compatibility with the existing site references. The files inside are unDraw illustrations:

| Filename            | unDraw source         | Used on                                                |
| ------------------- | --------------------- | ------------------------------------------------------ |
| `learning.svg`      | studying              | Homepage hero, Programs hero, Corporates hero          |
| `shift.svg`         | in_progress           | Homepage §2, About vision, Corporates supply gap       |
| `pathway.svg`       | onboarding            | Homepage §3, About approach, Memintel why              |
| `collaboration.svg` | co-working            | Homepage §4, Internship corporates, Memintel hero      |
| `ecosystem.svg`     | team_spirit           | Homepage §5, Programs audiences, Corporates audiences  |
| `horizon.svg`       | winners               | Homepage §6 closing, About horizon                     |

## Swap an illustration

1. Visit https://undraw.co and find an illustration you prefer
2. Set the colour to `#3d8688` in the unDraw UI
3. Download the SVG
4. Save it here using the existing filename (e.g., `learning.svg`) — that replaces it everywhere it appears on the site

Or use a different filename and update `image:` references in `data/<page>.yaml`.

## Switching to Storyset Cuate later

If you eventually want Storyset Cuate (Memintel's style) instead of unDraw, the same swap workflow applies:

1. Download SVGs from https://storyset.com/cuate with brand colours
2. Save over the unDraw files using the same filenames
3. Add Storyset attribution to the site footer (Storyset's free licence requires it; unDraw does not)
