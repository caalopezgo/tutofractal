# Crossroads · Floor Replay

Static 24-hour casino floor replay. Open `index.html` via any static host
(or https://tutofractal.com/crossroads/).

| File | Role |
| --- | --- |
| `index.html` | Replay (heat, walkers, follow-player, lenses) |
| `classic.html` | Earlier HUD / avatar viz |
| `data/machines.json` | 98 EGMs + bank / zone / XY |
| `data/sessions.json` | 2,051 carded ratings (synthetic day 2026-05-21) |
| `data/corridors.json` | Walkable aisle graph (shared with the CAD) |
| `data/summary.json` | Day totals |
| `plans/CR-FL-001_Crossroads_Slot_Floor_Plan.pdf` | CAD-style floor plan |

No build step. Fetches the JSON next to the page.
