# System Overview: Pro Clinic Website

## What This System Does

Pro Clinic's website is a digital storefront for a beauty and wellness salon. It allows visitors to discover treatments, learn about the salon and its team, see current offers, and submit booking requests. Internally, salon staff use an admin dashboard to manage treatment information, professionals, offers, and to view incoming booking requests.

## Core User Journeys

**Visitor discovering treatments:**
A new client arrives at the home page. They see featured treatments and click through to the full treatment directory. They browse by category (e.g., "Skincare"), find a treatment that interests them, read its description and price, and click a button to request an appointment. They fill a form with their name, email, phone, preferred treatment and date-time. The form is submitted, a confirmation email goes to them, and the salon staff receives a notification.

**Staff managing content:**
A salon staff member logs into the admin dashboard with a password. They can create a new treatment, upload a photo, set its category, duration and price. They can edit existing treatments or publish a new offer with a start and end date. They can view all incoming booking requests in a table.

## Architecture

**Frontend:** Next.js pages and components rendered server-side or client-side as needed. Navigation is simple: Home, Treatments, Team, Offers, Contact. Styling uses Tailwind CSS and shadcn/ui components for consistent, accessible UI.

**Server Layer:** Next.js API routes and server actions handle form submissions, admin authentication, and email dispatch. All sensitive logic (password checking, data mutation) runs here, never exposed to the browser.

**Database:** Supabase PostgreSQL stores treatments, professionals, offers, booking requests and admin credentials. Row-level security policies protect admin data. Tables are simple: treatments, professionals, offers, booking_requests.

**Hosting:** Vercel deploys the Next.js application with automatic builds from GitHub. Supabase is managed separately and accessed via environment variables.

## Data Model (Outline)

**Treatments**
- id, name, category, description, duration_minutes, price, professional_id, created_at

**Professionals**
- id, name, title, bio, photo_url

**Offers**
- id, title, description, discount_text, start_date, end_date, created_at

**Booking Requests**
- id, client_name, client_email, client_phone, treatment_id, preferred_datetime, message, created_at, status

**Admin Users**
- id, username, password_hash (single entry or small table)

## Security Model

All pages displaying treatments, team, offers and home are public; no authentication required. The admin section (path `/admin`) requires password login. Once logged in, the session allows editing treatments, professionals and offers, and viewing booking requests. Supabase RLS policies ensure that unauthenticated users cannot query admin-only tables.

Booking request forms validate input server-side before insertion. Email notifications are sent from server-side only, using a configured email service (e.g., SendGrid, Resend, or Supabase's own email API).

## Deployment and Operations

The repository is hosted on GitHub. Pushing to the main branch triggers a build on Vercel; the site is live in minutes. Environment variables (Supabase URL, API key, email credentials) are stored in Vercel's secrets. Admin staff log in to the dashboard; no other operational tooling is required for this version.