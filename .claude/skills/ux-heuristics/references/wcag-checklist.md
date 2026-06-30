# WCAG 2.1 AA Compliance Checklist

Complete checklist for Web Content Accessibility Guidelines 2.1 Level AA. The four core principles: **Perceivable, Operable, Understandable, Robust**.

---

## 1. Perceivable

Content must be presentable in ways users can perceive.

### 1.1 Text Alternatives

| Criterion | Level | Check |
|-----------|-------|-------|
| All images have descriptive alt text | A | [ ] |
| Decorative images have empty alt="" | A | [ ] |
| Complex images have extended descriptions | A | [ ] |
| Form inputs have associated labels | A | [ ] |
| Icon buttons have accessible names | A | [ ] |

**Implementation:**
```html
<!-- Informative image -->
<img src="chart.png" alt="Sales increased 40% in Q3 2026">

<!-- Decorative image -->
<img src="divider.png" alt="">

<!-- Icon button -->
<button aria-label="Close dialog">✕</button>
```

### 1.2 Time-Based Media

| Criterion | Level | Check |
|-----------|-------|-------|
| Videos have captions | A | [ ] |
| Audio has transcripts | A | [ ] |
| Videos have audio descriptions | AA | [ ] |
| Live content has captions | AA | [ ] |

### 1.3 Adaptable

| Criterion | Level | Check |
|-----------|-------|-------|
| Structure conveyed through semantic HTML | A | [ ] |
| Reading order makes sense without CSS | A | [ ] |
| Instructions don't rely on shape/color alone | A | [ ] |
| Layout reflows at 320px (no horizontal scroll) | AA | [ ] |
| Content works at 400% zoom | AA | [ ] |
| Text spacing can be modified without loss | AA | [ ] |

**Implementation:**
```html
<!-- Use semantic elements -->
<main>, <nav>, <header>, <footer>, <article>, <section>
<h1>-<h6> in order (don't skip levels)
<button> not <div onclick>
<a href> not <span onclick>
```

### 1.4 Distinguishable

| Criterion | Level | Check |
|-----------|-------|-------|
| Color not used as the only means to convey info | A | [ ] |
| Audio can be paused/stopped/muted | A | [ ] |
| Normal text contrast ≥ 4.5:1 | AA | [ ] |
| Large text (18pt/14pt bold) contrast ≥ 3:1 | AA | [ ] |
| UI components contrast ≥ 3:1 | AA | [ ] |
| Text can be resized to 200% without losing content | AA | [ ] |
| Images of text avoided (except logos) | AA | [ ] |

**Contrast ratios:**
- Body text (< 18pt): minimum **4.5:1**
- Large text (≥ 18pt or ≥ 14pt bold): minimum **3:1**
- UI components (buttons, inputs, icons): minimum **3:1**
- AAA target: **7:1** for normal text

**Testing tools:**
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Chrome DevTools → Accessibility → Color contrast

---

## 2. Operable

Users must be able to operate the interface.

### 2.1 Keyboard Accessible

| Criterion | Level | Check |
|-----------|-------|-------|
| All functionality available via keyboard | A | [ ] |
| No keyboard traps | A | [ ] |
| Skip navigation link provided | A | [ ] |
| Single-key shortcuts can be turned off/remapped | A | [ ] |

**Implementation:**
```html
<!-- Skip link (first focusable element) -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Ensure focus order is logical -->
<!-- Tab order follows visual reading order -->
<!-- No tabindex > 0 (breaks natural order) -->
```

### 2.2 Enough Time

| Criterion | Level | Check |
|-----------|-------|-------|
| Time limits can be turned off or extended | A | [ ] |
| Moving content can be paused | A | [ ] |
| Auto-updating content can be paused | A | [ ] |
| Session timeout warns with 20+ seconds to extend | AA | [ ] |

### 2.3 Seizures and Physical Reactions

| Criterion | Level | Check |
|-----------|-------|-------|
| No content flashes more than 3 times/second | A | [ ] |
| Animation can be disabled (prefers-reduced-motion) | AA | [ ] |

**Implementation:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 2.4 Navigable

| Criterion | Level | Check |
|-----------|-------|-------|
| Pages have descriptive titles | A | [ ] |
| Focus order is logical | A | [ ] |
| Link purpose is clear from text alone | A | [ ] |
| Multiple navigation methods exist | AA | [ ] |
| Headings and labels are descriptive | AA | [ ] |
| Keyboard focus is always visible | AA | [ ] |
| Navigation is in same location on all pages | AA | [ ] |
| Components identified consistently | AA | [ ] |

**Focus indicators:**
```css
/* Never do this */
:focus { outline: none; }

/* Do this instead */
:focus-visible {
  outline: 3px solid #005FCC;
  outline-offset: 2px;
}
```

### 2.5 Input Modalities

| Criterion | Level | Check |
|-----------|-------|-------|
| Touch targets ≥ 44×44 CSS pixels | AA | [ ] |
| Pointer gestures have alternatives | A | [ ] |
| No motion-only interactions | A | [ ] |
| Labels visible (not placeholder-only) | AA | [ ] |
| Status changes announced to screen readers | AA | [ ] |

---

## 3. Understandable

Users must be able to understand the content.

### 3.1 Readable

| Criterion | Level | Check |
|-----------|-------|-------|
| Page language is set (`<html lang="en">`) | A | [ ] |
| Language changes are marked in content | AA | [ ] |

### 3.2 Predictable

| Criterion | Level | Check |
|-----------|-------|-------|
| Focus doesn't trigger unexpected context change | A | [ ] |
| Input doesn't auto-submit or auto-redirect | A | [ ] |
| Navigation is consistent across pages | AA | [ ] |
| Components identified consistently | AA | [ ] |

### 3.3 Input Assistance

| Criterion | Level | Check |
|-----------|-------|-------|
| Errors identified in text (not color only) | A | [ ] |
| Error messages describe the problem | A | [ ] |
| Labels or instructions provided for inputs | A | [ ] |
| Error suggestions provided when known | AA | [ ] |
| Legal/financial submissions are reversible or confirmable | AA | [ ] |

**Error message implementation:**
```html
<label for="email">Email address</label>
<input 
  id="email" 
  type="email" 
  aria-describedby="email-error"
  aria-invalid="true"
>
<span id="email-error" role="alert">
  Enter a valid email address (example@domain.com)
</span>
```

---

## 4. Robust

Content must be interpreted by assistive technologies.

### 4.1 Compatible

| Criterion | Level | Check |
|-----------|-------|-------|
| Valid HTML (no duplicate IDs, proper nesting) | A | [ ] |
| Name, Role, Value set for all UI components | A | [ ] |
| Status messages announced without focus | AA | [ ] |

**ARIA implementation:**
```html
<!-- Button with state -->
<button aria-expanded="false" aria-controls="menu">Menu</button>
<ul id="menu" hidden>...</ul>

<!-- Live region for dynamic content -->
<div aria-live="polite" aria-atomic="true">
  <p>3 results found</p>
</div>

<!-- Form with ARIA -->
<input 
  type="text"
  aria-label="Search products"
  aria-autocomplete="list"
  aria-controls="search-results"
>
```

---

## Testing Approach

### Automated Tools (catches ~30% of issues)

| Tool | What It Tests |
|------|---------------|
| axe DevTools (browser extension) | 50+ rules, no false positives |
| WAVE (WebAIM) | Visual overlay of issues |
| Lighthouse (Chrome DevTools) | Accessibility audit score |
| IBM Equal Access Checker | Comprehensive rule set |

### Manual Testing (required for ~70% of issues)

| Test | How |
|------|-----|
| Keyboard navigation | Tab through entire page, check focus visibility and order |
| Screen reader | NVDA+Firefox (Windows), VoiceOver+Safari (Mac/iOS) |
| Zoom to 400% | Check no horizontal scrolling, no content loss |
| Color contrast | Use contrast checker on all text |
| Disable CSS | Check reading order makes sense |
| Reduced motion | Test with prefers-reduced-motion enabled |

### Screen Reader Testing Basics

**NVDA (Windows, free):**
- H: jump to headings
- Tab: interactive elements
- B: buttons
- F: form fields
- Insert+F7: list all links/headings

**VoiceOver (Mac, built-in):**
- Cmd+F5: toggle
- VO+U: rotor (lists headings, links, etc.)
- VO+Right: navigate next element

---

## Quick WCAG AA Checklist

Copy this for rapid audits:

```
Perceivable
[ ] Images have alt text
[ ] Videos have captions
[ ] Color not used alone to convey info
[ ] Text contrast ≥ 4.5:1 (normal), 3:1 (large/UI)
[ ] Content reflows at 320px
[ ] Works at 400% zoom

Operable
[ ] All functionality keyboard accessible
[ ] No keyboard traps
[ ] Skip nav link provided
[ ] Focus indicator always visible
[ ] Touch targets ≥ 44×44px
[ ] Animations respect prefers-reduced-motion

Understandable
[ ] lang attribute on <html>
[ ] Error messages describe problem and fix
[ ] Labels on all form inputs
[ ] Consistent navigation across pages

Robust
[ ] Valid HTML (check with W3C validator)
[ ] ARIA used correctly
[ ] Dynamic updates announced to screen readers
```
