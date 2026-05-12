# Cartoon illustrations — Storyset Cuate substitution manifest

The SVG files in this directory are **first-pass placeholder illustrations** authored inline for the Encoach.ai site. They use the brand palette and a friendly geometric style, but they are not as polished as professional illustration packs.

The intended permanent home for this directory is **Storyset Cuate** illustrations (the same style Memintel uses).

## How to swap a placeholder for an actual Storyset Cuate illustration

1. Go to **https://storyset.com/cuate** and search for the concept noted below
2. Pick an illustration you like
3. Customize the colors to match the brand palette (deep navy + teal + canvas)
4. Download as **SVG**
5. Save it to this directory using the exact filename listed below — that swaps it in everywhere it appears on the site
6. Add Storyset attribution somewhere on the site footer (Storyset's license requires this)

## File-by-file substitution guide

| Filename | Used on | Concept to search | Storyset URL |
|---|---|---|---|
| `learning.svg` | Homepage hero · Programs hero · Corporates hero | online learning, training, education, career growth | https://storyset.com/illustration/online-learning/cuate |
| `shift.svg` | Homepage §2 shift · About §1 · Corporates §2 | innovation, evolution, transformation, change | https://storyset.com/illustration/innovation/cuate |
| `pathway.svg` | Homepage §3 model · About §2 · Memintel §2 | curriculum, skills, learning path, career steps | https://storyset.com/illustration/career-progress/cuate |
| `collaboration.svg` | Homepage §4 operating model · Internship §2 · Memintel hero | teamwork, AI assistance, collaboration, human and AI | https://storyset.com/illustration/teamwork/cuate |
| `ecosystem.svg` | Homepage §5 ecosystem · Programs §3 · Corporates §3 | partnership, network, connections, community | https://storyset.com/illustration/networking/cuate |
| `horizon.svg` | Homepage §6 closing · About §3 | vision, future, growth, horizon, journey | https://storyset.com/illustration/vision/cuate |

## Attribution

Storyset's free license requires attribution. Add to the site footer:

> Illustrations by [Storyset](https://storyset.com)

A paid Storyset subscription removes the attribution requirement.

## Adding more illustrations

If you want different illustrations on specific sections rather than reusing across pages:

1. Download / author a new SVG
2. Save it here with a descriptive filename
3. Update the relevant `data/<page>.yaml` entry's `image:` field to point at the new filename

The section partials will pick it up automatically — no template edits needed.
