# Nielsen's 10 Usability Heuristics

Jakob Nielsen's framework provides foundational principles for interaction design.

## 1. Visibility of System Status

**Principle:** Keep users informed about what's going on through appropriate, timely feedback.

**Why it matters:** Users need to know the system received their action and is processing it. Silence breeds confusion and re-clicks.

**Applications:**

| Context | Pattern | Example |
|---------|---------|---------|
| File upload | Progress bar with % | "Uploading... 47%" |
| Form submit | Button state change | Button becomes "Saving..." → "Saved ✓" |
| Page load | Skeleton screens | Gray placeholder shapes appear instantly |
| Background task | Status banner | "Syncing your changes..." |
| Long process | Step indicator | "Step 2 of 4: Verifying payment" |

**Copy patterns:**
- "Saving..." → "Saved" (instant feedback loop)
- "Sending..." → "Message sent"
- "Loading your dashboard..." (explains the wait)

**Anti-patterns:**
- Silent form submissions (did it work?)
- Buttons that don't change state when clicked
- No feedback after destructive actions

---

## 2. Match Between System and Real World

**Principle:** Speak the user's language. Use words, phrases, and concepts familiar to the user.

**Why it matters:** Users map new interfaces onto existing mental models. The closer your system matches their world, the less they have to learn.

**Applications:**

| Context | Pattern | Example |
|---------|---------|---------|
| Labels | Plain language | "Sign in" not "Authenticate" |
| Icons | Recognizable metaphors | Trash bin for delete, magnifier for search |
| Ordering | Natural sequence | Street → City → State → Zip |
| Pricing | Real-world units | "$9.99/month" not "0.333 cents/day" |
| Dates | Familiar format | "Monday, June 30" not "2026-06-30T00:00:00Z" |

**Copy patterns:**
- "Search" not "Query"
- "Delete" not "Disassociate"
- "Your account" not "User profile entity"
- "Get started" not "Initiate onboarding sequence"

**Ethical boundary:** Don't use "real world" language to obscure unfavorable terms (e.g., calling a subscription trap a "membership").

---

## 3. User Control and Freedom

**Principle:** Users often choose actions by mistake. They need a clearly marked "emergency exit."

**Why it matters:** Feeling trapped reduces confidence. When users know they can undo, they explore more freely.

**Applications:**

| Context | Pattern | Example |
|---------|---------|---------|
| Destructive actions | Undo (not just confirm) | "Email deleted. Undo" toast |
| Multi-step flows | Cancel at every step | Visible "Cancel" on each screen |
| Modals | Easy escape | ESC key + X button + backdrop click |
| File operations | Trash (not permanent delete) | 30-day recovery window |
| Navigation | Back button works | Never hijack browser history |

**Undo beats "Are you sure?"**
- Confirmation dialogs → users click through without reading
- Undo → users feel safe AND get the efficiency benefit

**Copy patterns:**
- "Deleted. Undo" (5-second window)
- "Your changes are saved. Exit anyway?" (exit warning)
- "Cancel" not "Go back to the previous step"

---

## 4. Consistency and Standards

**Principle:** Users shouldn't have to wonder whether different words, situations, or actions mean the same thing.

**Why it matters:** Inconsistency forces users to relearn. Consistency builds a mental model they can reuse.

**Two types:**
1. **Internal consistency** — your product is consistent with itself
2. **External consistency** — your product follows platform conventions

**Applications:**

| Context | Pattern | Example |
|---------|---------|---------|
| Terminology | One term per concept | "Projects" everywhere, never "Workspaces" |
| Button styles | Same visual = same behavior | Primary buttons always blue |
| Navigation | Same location on every page | Header nav, logo top-left |
| Icons | Same icon = same action | Pencil always means "edit" |
| Destructive actions | Consistent styling | Red text/button for delete everywhere |

**Platform conventions to follow:**
- Logo top-left (links to homepage)
- Search top-right or top-center
- Shopping cart top-right
- Settings in top-right profile menu

**Anti-patterns:**
- "Settings" in one place, "Preferences" in another
- Same button style for primary and secondary actions
- Different navigation layout on different pages

---

## 5. Error Prevention

**Principle:** Design to prevent problems from occurring in the first place.

**Two types of errors:**
- **Slips** — correct intention, wrong action (typo, wrong button)
- **Mistakes** — wrong intention (misunderstood what a button does)

**Applications:**

| Error Type | Prevention | Example |
|------------|------------|---------|
| Wrong date format | Date picker | Calendar widget, not text field |
| Accidental delete | Confirmation for irreversible only | "Delete 47 files?" |
| Wrong selection | Autocomplete | Email address suggestions |
| Unsaved changes | Warning on exit | "You have unsaved changes. Leave?" |
| Duplicate submission | Disable after click | Button grays out after submit |

**Hierarchy of error prevention:**
1. **Constrain** — make wrong input impossible (date picker)
2. **Warn** — flag likely errors before submission (inline validation)
3. **Confirm** — require explicit confirmation for irreversible actions
4. **Undo** — let them recover after the fact

**Copy patterns:**
- "Delete 47 files? This cannot be undone." (for irreversible)
- "You have unsaved changes." (exit warning)
- Inline: "Use at least 8 characters" (before they submit)

---

## 6. Recognition Rather Than Recall

**Principle:** Minimize the user's memory load. Make objects, actions, and options visible.

**Why it matters:** Working memory holds ~7 items. Recognition is far easier than recall.

**Applications:**

| Context | Pattern | Example |
|---------|---------|---------|
| Navigation | Show current location | Highlighted nav item, breadcrumbs |
| Search | Recent searches | Dropdown shows last 5 queries |
| Forms | Pre-fill known values | Saved address at checkout |
| Commands | Visible options | Dropdown over free-text field |
| Status | Decoded values | "Active" not "status_code: 1" |

**Patterns to implement:**
- Breadcrumbs (where am I?)
- Recent items (what was I working on?)
- Autocomplete (what are my options?)
- Tooltips on hover (what does this do?)
- Labels on icons (what is this icon?)

**Anti-patterns:**
- Icon-only navigation (forces recall)
- Commands users must memorize
- Codes in UI instead of human-readable values

---

## 7. Flexibility and Efficiency of Use

**Principle:** Accelerators — unseen by the novice — may speed up the interaction for the expert.

**Why it matters:** Your product serves a spectrum of users. Novices need guidance; experts need speed.

**Applications:**

| User Type | Feature | Example |
|-----------|---------|---------|
| Expert | Keyboard shortcuts | Cmd+K command palette |
| Expert | Bulk actions | Select all → delete |
| Expert | Saved searches/filters | Named filter presets |
| Expert | Custom views | Saved dashboard layouts |
| Novice | Guided defaults | Smart defaults, wizard flows |

**Progressive disclosure:**
- Show simple version by default
- Reveal advanced features on demand
- "Advanced options ▼" expandable section

**Power user features:**
- Command palette (Cmd+K / Ctrl+K)
- Keyboard shortcuts for all primary actions
- Bulk operations
- Export/import
- API access

**Copy patterns:**
- Tooltip on hover: "Tip: Press Cmd+K to search anywhere"
- "Advanced" toggle reveals additional fields

---

## 8. Aesthetic and Minimalist Design

**Principle:** Interfaces should not contain irrelevant or rarely needed information. Every extra unit of information competes with relevant information.

**Why it matters:** Visual noise makes everything harder to find. When everything screams for attention, nothing stands out.

**Applications:**

| Context | Pattern | Example |
|---------|---------|---------|
| Content | Show what's needed now | Progressive disclosure for complex features |
| CTAs | One primary per page | One "Get started" button, not three |
| Forms | Only necessary fields | Remove "Fax number" |
| Marketing | Lead with value | Remove welcome paragraphs |
| Data | Highlight the signal | Mute secondary data, highlight key metrics |

**Evaluation test:** For every element on screen, ask: "What would the user lose if this were removed?" If the answer is "nothing," remove it.

**Anti-patterns:**
- Multiple primary CTAs competing for attention
- Decorative graphics that add no information value
- Marketing copy that users will skip
- Redundant labels ("Your name: [Name field]")

---

## 9. Help Users Recognize, Diagnose, and Recover from Errors

**Principle:** Error messages should be expressed in plain language, precisely indicate the problem, and constructively suggest a solution.

**Three-part error message:**
1. **What happened** — state the error clearly
2. **Why it happened** — explain the cause
3. **How to fix it** — give a specific next step

**Applications:**

| Error Type | Bad | Good |
|------------|-----|------|
| Login fail | "Invalid credentials" | "Wrong password. Forgot your password?" |
| Form validation | "Validation error" | "Email must include @" |
| Network error | "Error 503" | "Can't connect. Check your internet and try again." |
| Empty state | "No data" | "No projects yet. Create your first project →" |
| Permission | "Unauthorized" | "You need editor access to do this. Ask your admin." |

**Rules:**
- Plain language (never error codes)
- Specific (not "something went wrong")
- Never blame the user ("You entered an invalid..." → "This field requires...")
- Preserve user input (don't clear the form on error)
- Highlight the problem field

**Copy patterns:**
- "Password must be 8+ characters" (not "Invalid password")
- "That email is already registered. Sign in instead?" (helpful redirect)
- "Connection failed. Check your internet connection and try again." (actionable)

---

## 10. Help and Documentation

**Principle:** Even though it's better if the system can be used without documentation, it may be necessary to provide help.

**Why it matters:** When users are stuck, they need help that's findable, scannable, and actionable.

**Applications:**

| Type | When | Example |
|------|------|---------|
| Tooltips | Near complex fields | "?" icon explains billing cycle |
| Inline hints | Below inputs | "We'll never share your email" |
| Empty states | First-time experience | "No reports yet. Create your first report →" |
| Guided tours | Onboarding | Highlight + tooltip sequence |
| Search | Help center | Full-text search over all docs |
| Contextual help | Complex tasks | "Need help? See our setup guide" |

**Documentation principles:**
- Task-focused: "How to export a report" not "Export feature reference"
- Searchable: Users arrive at the exact answer
- Contextual: Help available at the point of confusion
- Current: Outdated docs destroy trust

**Anti-patterns:**
- Long-form "Getting started" guides nobody reads
- Help that requires leaving the product
- Technical documentation for user-facing help
- Tooltip-only help (not accessible)
