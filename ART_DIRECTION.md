# MUMTAZ — Art Direction v2
## "Ivory & Gold" — the material language of the monument, not a picture of it

### 1. The core correction (what failed in v1)
v1 read as "a wedding AT the Taj Mahal": literal monument photos, a monument wax-seal,
hotel ballroom stock photography, garish gemstone-jewelry clusters (pure red/green/blue
plastic-looking flowers) over a navy "night sky". Nothing about that is Taj Mahal — it is
wedding-clipart. The real monument is monastic in its restraint: **~90% of its surface is
warm ivory marble; color exists only in small, precise inlaid whispers.** Luxury comes from
restraint, material honesty and perfect symmetry — never from more ornament.

### 2. Research — the material language of the Taj Mahal (Agra, 1632–1653)
- **Makrana marble** (Makrana quarries, Rajasthan): not stark white — warm ivory,
  milky, faintly translucent, soft grey veining. It *changes with light*: rose at dawn,
  ivory at noon, amber-gold at dusk, silver under moon. We render this as ivory paper
  with faint veining + a dusk-warm gradient story down the page.
- **Parchin-kari (pietra dura)**: stone-in-stone inlay set flush into marble. Genuine
  stones: **carnelian** (burnt orange-red), **jade/nephrite** (muted greens),
  **lapis lazuli** (deep blue), **turquoise**, **amethyst**, **agate**, **jasper**,
  **coral**, **pearl**. Always small sprays and blossoms inside carved frames — micro-doses.
- **Thuluth calligraphy** (Amanat Khan): deep brown-black jasper lettering framed by
  hairline floral bands — letterforms as jewelry.
- **Jali**: perforated marble lattice screens, octagon-and-star geometry, filtering
  light into haze.
- **Architecture**: perfect bilateral symmetry; the pishtaq/iwan (pointed-arch niche in a
  rectangular frame); lotus-petal arch edging; carved acanthus rinceaux bands; chhatri
  domes; the gilded finial (lotus + crescent); charbagh quadrilateral garden cut by
  water channels; the raised reflecting pool (al-Hawd al-Kawthar); cypress avenue.
- **Emotional register**: it is a monument of grief transfigured into beauty — "a
  teardrop on the cheek of time" (Tagore). Warmth, stillness, permanence. Luxury = quiet.

### 3. Palette (from the stone itself)
| Token | Hex | Source |
|---|---|---|
| marble-ivory | `#F1EADC` | honed Makrana ivory (page base) |
| marble-chalk | `#FAF6EE` | raised card / panel marble |
| veining-grey | `#D8CFBF` | faint marble veining lines |
| gold-leaf | `#B98A3E` | gilded finial, hairlines, letterspaced caps |
| gold-deep | `#96702F` | pressed gold text, seals |
| ink-espresso | `#33261B` | Thuluth jasper-brown lettering (body text) |
| jasper-umber | `#6E4A33` | secondary text, quotes |
| carnelian | `#A34A28` | inlay accent (used sparingly) |
| jade | `#5C7A5E` | inlay accent |
| lapis | `#33517A` | inlay accent |
| turquoise-stone | `#6C9C97` | inlay accent |
| dusk-rose | `#E7C8AC` | dawn glow gradient wash |
| moon-pearl | `#DCD6C9` | moonlit section text on umber |

Dusk sections use **warm umber/espresso marble** (`#2E241C → #3A2C20`) — the monument at
candlelight — never navy blue.

### 4. Design rules (the "expensive" checklist)
1. Symmetry and center-axis composition on every scene; margins generous, content column ≤ 720px.
2. Gold appears as **hairlines (0.5–1.5px), letterspaced small caps (0.28em tracking),
   and tiny stops** — never as large filled blocks, gradients or shiny bevels.
3. Gem colors only inside inlay sprigs and small dot-motifs; never as UI accent fills.
4. Every panel: soft true shadow (no borders that shout), 1px inner marble bevel via
   subtle inset line, corner ornament only where architecture would put one.
5. Typography: **Cormorant Garamond** (display, 300–500 weight, tall ascenders),
   letterspaced small caps for labels, a restrained script only for the couple's names.
6. Backgrounds: marble texture at 6–10% visibility; sections alternate ivory → dusk-umber
   (dawn → dusk → moonlight narrative).
7. No photographs of the monument. No monument silhouettes as clipart. The architecture
   is *quoted* through arch frames, finial marks, jali bands and the charbagh axis.
8. Motion: slow, reverent (1.4–2s fades, gentle rises). Nothing bounces.

### 5. Motif library — carrier decisions
**Inline SVG (precise geometry, hairline gold):**
- pishtaq arch frame (double hairline + lotus tip) — hero card, venue panel
- jali octagon-star band — section dividers
- acanthus corner flourish ×2 (mirrored) — page corners on ivory scenes
- lotus-bud divider (diamond + flanking hairlines) — under every heading
- monogram medallion (octagonal jali ring, interlaced A·M) — hero + closing
- charbagh quadrant diagram (editorial line plan of the four-part garden) — venue section
- gilded finial mark (lotus over crescent, 24px) — eyebrow above titles
- calligraphic rule (hairline with central diamond stop)

**Generated PNG cutouts (organic/painterly, transparent):**
- marble texture (full-bleed, 1440×720, ivory with faint veining)
- dusk-umber marble texture (for dark scenes)
- pietra dura sprigs ×3 — carnelian poppy spray, jade & lapis blossom spray,
  turquoise bud sprig (flat inlay-painting style, refined scale)
- gold filigree bloom corner ×2 (fine antique-gold line bouquet, mirrorable)
- ivory rose petal scatter (soft, near-monochrome)
- gold lotus wax seal (matte antique gold, no monument)
- lotus-petal garland swag (thin, for envelope flap)
- cypress pair (slender dark-green cypress, for the venue/charbagh moment)

### 6. Copy register
No "Taj" literals, no venue-hotel language. The monument is felt, never named:
"where marble keeps its promise", "a garden in four parts", "the river remembers".
Event names: Haldi, Mehndi, Sangeet, Pheras, Reception (a Hindu wedding, not a Muslim one — no qawwali, no walima). Venue becomes
"The Marble Pavilion — Sundar Bagh, Agra" (fictional riverfront garden estate).
