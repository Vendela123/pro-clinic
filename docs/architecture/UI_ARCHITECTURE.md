# Pro Clinic — UI Architecture

What Pro Clinic looks like and how someone moves through it. This is written for two readers:
you, and the AI assistant running `/start` — for which this file is the build brief it
works from before it writes a single screen. Keep it current; a stale brief here means the next
`/start` (or the next spec) builds toward the wrong picture.

## Design direction
In the founder's own words: The design should feel luxurious without being flashy, and professional without feeling cold or corporate. Make the navigation simple and intuitive, with clear treatment categories, prominent booking calls-to-action and easy-to-scan information. The overall impression should be that of a high-quality, established beauty salon that feels welcoming and trustworthy.

## Design system
No curated direction was picked, so no theme was installed beyond the shadcn/ui defaults `/start` sets up. The direction above is the whole brief; finish the screen to it.

## References
1 screenshot were attached and read when this brief was written; it is described here rather than kept, so this section is the whole of what they said.

Read these as direction, never as something to copy: the layout, the density, the tone and the palette are what to learn from. Do not reproduce anyone's logo, brand name, wording or artwork — this product is not theirs and must not look like it is.

## Screens & navigation
**The first screen** performs the product's core action: First, the website must make it easy for visitors to discover Pro Clinic’s treatments, understand what each treatment includes and quickly find the information they need to book an appointment.
If it works well, it becomes a modern, premium and welcoming digital home for Pro Clinic that builds trust, showcases the salon and its treatments, and turns visitors into returning clients.

The core objects are Home — Introduces Pro Clinic, highlights popular treatments and guides visitors toward booking or contacting the salon.
Treatments — Shows all treatments in clear categories. Each treatment includes details, pricing, duration and a way to contact the salon about booking.
About / Our team — Introduces Pro Clinic, the salon, its professionals and the personal experience behind the business.
Offers & News — Displays current promotions, special offers and news.
Contact / Book — Allows visitors to contact the salon by phone, SMS or email to request an appointment. There is currently no online booki — each one a founder works with needs somewhere to be listed and somewhere to be seen on its own.

This product has no accounts, so there is no sign-in surface and no account menu.

Navigation is whatever the shortest path to that core action needs and no more. A screen nobody has a reason to open is a screen that should not be built yet.

## Layout, spacing & type
A persistent shell — navigation on the left or across the top, the working area filling the rest — with content width-capped so a wide display centres rather than stretches.

One spacing scale, used everywhere. Related things sit closer together than unrelated ones, and the gap between sections is visibly larger than the gap inside one. Alignment is a grid, not a judgement per screen.

One type scale, three or four sizes at most: a page title, a section heading, body, and a smaller size for supporting text. Weight and colour carry hierarchy before size does.

## Colour
Neutrals carry the interface; one accent carries action. Status colours mean exactly one thing each. Every value is a Tailwind design token defined once — a hardcoded hex in a component is a bug, because it is the one thing that cannot be changed later in one place. Dark mode is not an afterthought: both themes are defined at the same time.

## Components
Build on the shadcn/ui primitives this project installs — extend them rather than forking them, and never write a second button.

The inventory this product needs is small and worth naming before writing any of it: the shell, one list surface, one detail surface, the form controls the core action needs, and the three state components below. Everything else is a variation on one of those until proven otherwise.

## Interaction & motion
Every action says what happened: a button that submits shows it is working, and the result is visible without hunting for it. Nothing silently succeeds.

Motion is short and purposeful — something entering, something leaving, something changing state. No animation on load for its own sake, and nothing that delays a person who knows where they are going.

Keyboard and focus are part of the design, not an audit item: every interactive element is reachable, focus is visible, and the primary action of a screen can be reached without a mouse.

## States
Loading, error, and empty are real components on every screen that fetches data — never a conditional buried in JSX, and never a blank flash while something loads.

**Empty is a designed screen, not an absence.** It says what would be here, and offers the action that puts something here. It is the first screen most founders' first user ever sees.

**Error says what failed and what to do next.** A stack trace, a spinner that never stops, and a silent no-op are all the same bug wearing different clothes.

## Design language
Tailwind v4 design tokens for color, spacing, radii and type — never a hardcoded hex or pixel value in a component. shadcn/ui primitives, extended rather than forked. Dark mode first.
