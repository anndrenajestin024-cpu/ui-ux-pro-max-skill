# Cultural UX Considerations

Designing user experiences for global audiences across different cultural contexts.

---

## Right-to-Left (RTL) Languages

Languages requiring RTL layout: **Arabic, Hebrew, Persian (Farsi), Urdu, Dhivehi, Sindhi**

### Layout Mirroring

| Element | LTR | RTL |
|---------|-----|-----|
| Reading direction | Left → Right | Right → Left |
| Page layout | Content starts left | Content starts right |
| Navigation | Left-anchored | Right-anchored |
| Icons (directional) | Arrow points right | Arrow points left |
| Progress bars | Fill left → right | Fill right → left |
| Breadcrumbs | Home > Section > Page | Page < Section < Home |

**Never mirror:**
- Numbers (always LTR: 123, not ٣٢١)
- Phone numbers
- Dates in numeric format
- Code snippets
- Mathematical expressions
- Media player controls (play/pause)

### CSS Implementation

```css
/* Use logical properties instead of left/right */
.element {
  margin-inline-start: 16px;  /* instead of margin-left */
  padding-inline-end: 24px;   /* instead of padding-right */
  border-inline-start: 1px solid;
}

/* Text alignment */
[dir="rtl"] .text {
  text-align: right;
}

/* Flexbox auto-reverses with dir attribute */
[dir="rtl"] .flex-row {
  /* flex-direction: row automatically becomes row-reverse */
}
```

### Icon Mirroring

**Mirror these icons in RTL:**
- Back/forward arrows
- Navigation chevrons
- Progress indicators
- List item bullets
- Checkmarks (sometimes)

**Don't mirror:**
- Clock (time is universal)
- Volume/audio icons
- Flags
- Logos
- Locks/security icons
- Play/pause buttons

---

## Color Symbolism by Culture

| Color | Western | East Asian | Middle East | India | Notes |
|-------|---------|------------|-------------|-------|-------|
| **Red** | Danger, error | Luck, prosperity | Danger | Purity, celebration | Context-dependent |
| **White** | Purity, clean | Mourning, death | Purity | Mourning | Avoid for celebratory in Asia |
| **Black** | Elegance, death | Elegance | Mourning | Evil | |
| **Green** | Nature, go, money | Nature, go | Sacred (Islam) | New beginnings | Relatively safe |
| **Blue** | Trust, calm | Trust | Protection | Trust | Safest global choice |
| **Yellow** | Caution, energy | Imperial, luck | Happiness | Sacred | |
| **Purple** | Luxury, royalty | Wealth | Luxury | Sorrow | |
| **Orange** | Energy, creativity | Happiness | — | Sacred (Hinduism) | |

**Safest global palette:** Blue primary, white/light background, neutral grays — relatively safe across cultures.

**High-risk choices:**
- Red for success/positive (confusing outside Asia)
- White for celebration messaging in East Asian markets
- Green for financial apps in some Middle Eastern contexts (sacred associations)

---

## Form Design Across Cultures

### Name Fields

| Region | Convention | Field Design |
|--------|------------|--------------|
| Western | Given + Family | First name, Last name |
| East Asian (CN, JP, KR) | Family + Given | Two separate fields, or single "Full name" |
| Hispanic | Two surnames | Given + Paternal surname + Maternal surname |
| Icelandic | Patronymic | No "family name" concept |
| Mononym | Single name | Some cultures use one name only |

**Best practice:** Use a single "Full name" field for global products. If you need to parse names, do it on the backend — don't force cultural assumptions on users.

### Address Fields

| Field | Global Reality |
|-------|---------------|
| Postal code | 50+ countries don't use them |
| State/Province | Many countries have neither |
| County | UK-specific concept |
| Street number before street name | US convention; reversed in many countries |

**Best practice:**
- Make postal code optional or country-conditional
- Use a flexible address format that adapts by selected country
- Order fields to match the country's postal standard

### Phone Numbers

```
Bad:  [Area code] [Number]  (US-centric)
Good: [+Country code] [Number]  (E.164 format)
```

- Always include country code field
- Use E.164 format for storage: +12125551234
- Accept spaces, dashes, parentheses — strip on save
- Validate by country (different lengths/formats)

### Date and Time

| Format | Where Used |
|--------|-----------|
| MM/DD/YYYY | US only |
| DD/MM/YYYY | UK, Australia, most of Europe |
| YYYY-MM-DD | ISO standard, East Asia |

**Best practices:**
- Use date pickers — never text input for dates
- Display dates in the user's local format
- Store dates in ISO format (YYYY-MM-DD) internally
- Show month names, not numbers: "June 30, 2026" not "6/30/2026"

**Time:**
- 12-hour (AM/PM) vs. 24-hour: follow user's locale
- Always show timezone for scheduled events
- Store timestamps in UTC

---

## Typography for Global Audiences

### Text Expansion

When translating from English, budget for text expansion:

| Target Language | Expansion Factor |
|-----------------|-----------------|
| German | 1.3x |
| French | 1.2x |
| Spanish | 1.2x |
| Dutch | 1.2x |
| Portuguese | 1.15x |
| Japanese | 0.8x |
| Chinese (Simplified) | 0.6-0.8x |
| Korean | 0.9x |
| Arabic | 1.2x (+ RTL) |

**Design implications:**
- Never fixed-width containers for text
- Leave breathing room in button designs
- Test UI with 30% more text than your English copy
- Use `max-content` or `auto` widths for dynamic labels

### Font Considerations

| Script | Font Requirement |
|--------|-----------------|
| Latin | Standard web fonts work |
| Chinese (CJK) | Requires CJK font subset |
| Arabic/Hebrew | RTL font with proper shaping |
| Devanagari (Hindi) | Requires Devanagari-capable font |
| Thai | Requires Thai font, no word breaks |
| Japanese | Requires CJK + kana |

**Google Fonts with broad language support:**
- Noto Sans: covers 800+ languages
- Noto Serif: serif equivalent

---

## Localization vs. Internationalization

**Internationalization (i18n):** Building the system to support localization (done once, in engineering)

**Localization (l10n):** Adapting content for a specific locale (done per market)

### i18n Checklist (Engineering)

| Area | Requirement |
|------|-------------|
| Text | Externalize all strings (no hardcoded copy) |
| Dates | Use locale-aware date formatting |
| Numbers | Locale-aware formatting (1,000 vs. 1.000 vs. 1 000) |
| Currency | Locale-aware with proper symbol placement |
| Sorting | Locale-aware string collation |
| Input | Support unicode in all text fields |
| Layout | CSS logical properties, RTL-ready |
| Images | Avoid culture-specific imagery in shared components |

### l10n Checklist (Content + Design)

| Area | Requirement |
|------|-------------|
| Copy | Translated by native speakers, not machine-only |
| Images | Culture-appropriate imagery |
| Icons | Check for cultural mismatches |
| Colors | Review color symbolism for target market |
| Examples | Localize sample data (names, addresses, phone numbers) |
| Legal | Local regulations, required disclosures |
| Currency | Local currency, pricing psychology |

---

## Cultural UX Patterns

### Trust Signals by Region

| Region | Primary Trust Signals |
|--------|----------------------|
| US/UK | Brand reputation, reviews, security badges |
| Germany | Data privacy (DSGVO), imprint page, precise specs |
| Japan | Detailed information, official certifications, long-form content |
| China | Social proof, KOL endorsements, platform verification |
| Middle East | Local partnerships, Arabic-language support |

### Checkout Psychology

| Region | Pattern |
|--------|---------|
| US | Express checkout, fewer steps |
| Germany | Detailed summary before confirm, invoice preferred |
| Japan | Convenience store payment options, precise order confirmation |
| India | UPI, cash on delivery, EMI options |
| Brazil | Boleto bancário, installments (parcelamento) |

### Communication Style

| Style | Markets | Implications |
|-------|---------|--------------|
| Low-context (explicit) | US, Germany, Scandinavia | Direct CTAs, explicit instructions |
| High-context (implicit) | Japan, China, Arab countries | Tone matters, relationships implied |
| Formal | Japan, Germany, France | Respectful language defaults |
| Informal | US, Australia, Netherlands | Casual tone acceptable |

---

## Pre-Launch Global Checklist

```
Layout
[ ] RTL layout works correctly for Arabic/Hebrew
[ ] Text containers flex for expansion
[ ] No hardcoded LTR-specific CSS

Forms
[ ] Single "Full name" field (or flexible name format)
[ ] Address adapts to selected country
[ ] Postal code optional
[ ] Country code on phone field
[ ] Date picker (not text input)

Content
[ ] Strings externalized for translation
[ ] No idioms or cultural references in UI strings
[ ] Dates use locale format
[ ] Currency shows symbol and code
[ ] Timezone shown for time-sensitive content

Imagery
[ ] No culturally inappropriate imagery in shared assets
[ ] Diverse representation in people photos
[ ] Icons checked for cultural mismatches

Technical
[ ] lang attribute set dynamically
[ ] Unicode support in all inputs
[ ] Locale-aware sort and format libraries
[ ] Character limits accommodate non-Latin scripts
```
