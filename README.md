# Mumtaz — an ivory-and-gold wedding invitation

*Mumtaz* — "the chosen one of the palace", the name the world remembers
of the Taj Mahal's marble — is a wedding invitation reimagined as **the ivory
monument itself at first light**. The guest lifts the veil at the great
gate — an ivory-silk envelope sealed with the gold dome seal — and walks
the pavilion: the names flourishing on a Makrana-marble card beneath a
cusped pishtaq arch that frames the dawn river, gemstone-inlay cascades
spilling from its corners (carnelian, lapis, jade and mother-of-pearl —
the parchin kari of the monument), cypress trees standing sentinel, gold
bud-strings hanging from its shoulders, a floating-candle courtyard bowl
at its feet. The story is set as the chronicle under Tagore's teardrop;
the date proclaimed on a gilded finial plate; the celebrations strung
along a gold water-channel through cusped mehrab niches; the palette
presented as the stones of the inlay; the festivities hanging from a
lantern garland; the venue shown through the arch of the marble
pavilion; a turning shamsa countdown; a fountain-pen reply desk; and a
moonlight-garden farewell beneath the midnight Taj. Lapis nights and
Makrana papers, joined by running cusped-dome friezes; set in Cormorant
Garamond, Marcellus, Pinyon Script, La Belle Aurore, EB Garamond and
Jost, with Gulzar nastaliq accents (محبت — mohabbat). No site chrome —
it is the monument itself. Fully customisable in the browser with a
guided, auto-saving visual editor — then published live with one click
on Cloudflare.

**Live template pieces**

| Piece | Where |
| --- | --- |
| Guest invitation (envelope opening + ten scenes + RSVP) | `index.html` |
| Visual editor ("Invitation Atelier") | `customize.html` |
| Guest submissions page | `replies.html` |
| Static assets + D1 API | `worker.js`, `functions/` |
| Sample content & copy | `js/config.js` |

**The art set** (`assets/art/`) — transparent-cut gemstone-inlay
ornaments, a gilded finial, the gold dome seal, a brass urli of floating
candles, cypress and garden roses, and three photographic plates: the
Taj at dawn, the Taj under a full moon, and the marble pavilion at dusk.
Architectural ornaments (the cusped pishtaq arches, the shamsa rosette,
the paisley frieze) are drawn as inline SVG; every surface stays honed
marble — no pattern overlays, no star lattices.

## Develop

```bash
npm install
npm run dev          # build + local D1 + wrangler dev on :8788
```

## Deploy

```bash
npm run deploy       # build + wrangler deploy
```

Pushing to `main` triggers GitHub Actions to build and deploy
automatically (see `.github/workflows/deploy.yml`).

See `DEPLOY.md` for the full step-by-step guide.
