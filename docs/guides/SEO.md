# Pro Clinic — Being found

Pro Clinic is for one thing before anything else: first, the website must make it easy for visitors to discover Pro Clinic’s treatments, understand what each treatment includes and quickly find the information they need to book an appointment.
If it works well, it becomes a modern, premium and welcoming digital home for Pro Clinic that builds trust, showcases the salon and its treatments, and turns visitors into returning clients. People should
be able to find it.

The public pages, whichever those turn out to be.

This document is the decision record, not a tutorial. It says what this project has settled on so
an agent building a page does not have to ask, and so nobody re-argues it per feature.

## What decides this, before any tactic does

Search engines and AI assistants both answer the same question: *is this page the best answer to what
somebody asked?* Everything below is about making that answer legible. None of it substitutes for the
page being worth finding.

**Who is searching:** businesses (B2B). Everything below is written for them, and a page that ranks for
somebody else's question is not a win.

They are searching for the problem, not for this product's name: nobody looks up a tool they have
never heard of. The pages that earn traffic are the ones answering the question that sent them,
which for this project starts at: The main users are new and existing clients looking for beauty and wellness treatments. The website should make it much easier for them to discover treatments, understand what Pro Clinic offers, get important information quickly and book an appointment.The goal is to create a more premium, welcomin of the physical sag and trustworthy online experience that reflects the quality and personal service

## The decisions, made once

- **Where the words live:** one module exporting a record of every public route with its own
  title and description. Each page's `metadata` export reads from it, and so do `sitemap.ts`,
  `robots.ts` and the Open Graph card. One fact, one place.
- **Rendering:** these pages stay Server Components. A page whose content arrives after
  hydration is a page a crawler may index empty.
- **One `h1` per page**, headings in order, an `alt` on every image. Enforced by a test rather than
  by review, or it decays within a month.
- **A canonical URL on every public page**, so a page reachable by two paths is still one page.
- **Structured data (JSON-LD)** describing what the page is, built from the same record as the
  titles. Never a claim the page itself does not make.
- **Non-production hosts are never indexable.** Vercel serves them; whatever it takes
  there, a preview must not compete with production in a search result.

## What to build, in this order

1. **The one record**, before any page has metadata. Retrofitting it means editing every page twice.
2. **Titles and descriptions** for each public route, written for a reader looking at a list of
   results — not assembled from keywords.
3. **`robots.txt` and a sitemap**, both derived from that record rather than written by hand. A
   hand-written sitemap is a list that silently stops being true.
4. **Open Graph and Twitter cards**, so a shared link is not a bare URL.
5. **Structured data**, once the pages are stable enough to describe.
6. **`/llms.txt`**, saying what this is, who it is for and who it is not for.
7. **A speed budget in CI**, once there is enough of a site to measure.

Each of these is a spec. Run `/createspec` for the next one — see `specs/README.md`, which already
carries the brief.

## What this project must never do

- **Claim in markup what the page does not say.** Structured data that names a price, a rating or a
  feature the page does not show is the one SEO mistake with a penalty attached. If a fact is not on
  the page, it does not go in the markup.
- **Write pages for a ranker rather than a reader.** Keyword-stuffed headings, near-duplicate pages
  per search term, text hidden for crawlers — all of it is detectable, and all of it is reversible
  only slowly.
- **Let a machine-readable claim drift from the page.** The titles, descriptions and structured data
  belong in one place in the code, read by everything that needs them. Two copies is one copy that is
  wrong.

## AI assistants, not only search engines

People now ask an assistant which tool to use, and the answer comes from what it was trained on and
what it can fetch at the time of asking. Two things are in this project's control:

- **Being fetchable.** The assistant crawlers — GPTBot, ClaudeBot, PerplexityBot, Google-Extended and
  their kin — read `robots.txt` like any other. Blocking them is a decision to make deliberately, not
  by leaving a default in place.
- **Being quotable.** A short `/llms.txt` saying plainly what Pro Clinic is, who it is for, **and
  who it is not for**, gives an assistant something to weigh. The "not for" half is what makes the
  rest credible: a description that suits everybody tells a reader nothing.

Neither makes an assistant recommend Pro Clinic. They make it possible for one to, accurately.

## Verifying any of this worked

- **Search Console** (and Bing Webmaster Tools) for what queries actually reach this project.
  Verify the domain early; it collects no history before it is verified, so a late setup costs
  months that cannot be recovered.
- **The rendered HTML, not the source.** Fetch a public page and read what came back. Every claim
  in this document is checkable that way, and several of them have been wrong in projects where
  nobody looked.
- **A test per rule.** Pro Clinic already runs its suite in CI; the heading, alt-text and
  metadata rules belong there rather than in a checklist someone remembers.

Ranking takes months and moves for reasons outside this repository. Judge the work by whether the
rules above hold, not by a position on a given week.
