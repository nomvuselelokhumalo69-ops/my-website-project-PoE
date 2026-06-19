# Ubuntu Eats – Website Project

**Subject:** Web Development (Introduction) — WEDE5020  
**Student:** Nomvuselelo Khumalo  
**Student Number:** ST10523069  
**Date:** 19 June 2026
**Submission:** Final Portfolio of Evidence (PoE) — Parts 1, 2 & 3 Complete

---

## Project Overview

Ubuntu Eats is an authentic pan-African restaurant brand based in Johannesburg, South Africa, with three locations: Maboneng, Sandton, and Soweto. This project involved designing and developing a fully functional, responsive multi-page website for the organisation.

The website was built as a Portfolio of Evidence (PoE) across three parts:
- **Part 1:** Project planning, research, and HTML structure
- **Part 2:** CSS styling and responsive design
- **Part 3:** JavaScript functionality and SEO optimisation

---

## Website Goals and Objectives

- Enable online table reservations across all three branches
- Showcase the full menu with category filtering
- Promote the catering division with package details and enquiry forms
- Tell the brand story and build emotional connection with visitors
- Ensure accessibility and mobile responsiveness (WCAG 2.1 AA)
- Optimise for local search (SEO) in the Johannesburg metro

### Key Performance Indicators (KPIs)
- 10,000 monthly unique visitors
- 200 monthly table reservations
- 150 weekly online orders (future phase)
- 25% increase in corporate catering bookings

---

## Key Features and Functionality

### HTML (Part 1)
- 5 fully structured HTML pages with semantic tags
- Consistent navigation linking all pages
- Embedded Google Maps on contact page (3 locations)
- Accessibility attributes (aria-labels, alt text, roles)
- Properly commented and indented code

### CSS (Part 2)
- External stylesheet (`css/style.css`) linked to all pages
- Brand colour palette: Deep Kente Red (`#8B2500`), Warm Gold (`#C8860A`), Earthy Brown (`#4A3728`), Ivory White (`#FAF6F0`)
- Typography: Abril Fatface (headings), Source Sans Pro (body) — via Google Fonts
- CSS Grid and Flexbox layout system
- Responsive breakpoints: 1024px (tablet), 768px (mobile), 480px (small mobile)
- CSS custom properties (variables) for consistent theming
- CSS reset for cross-browser consistency
- Hover states, transitions, and animations

### JavaScript (Part 3)
- Mobile navigation hamburger toggle
- Menu tab switching (Starters / Mains / Desserts / Drinks)
- Enquiry type toggle (Table Reservation / Catering Enquiry)
- Full client-side form validation with error messages for:
  - Reservation form
  - Catering enquiry form
  - Contact form
- Scroll reveal animations using IntersectionObserver
- Auto-set minimum date to today on all date inputs
- Sticky header with scroll-triggered shadow

### SEO
- Unique `<title>` and `<meta description>` on every page
- Meta keywords on all pages
- Semantic HTML structure (h1 → h6 hierarchy)
- Descriptive alt text on images
- `robots.txt` — allows all crawlers, references sitemap
- `sitemap.xml` — lists all 6 pages with priority and change frequency

---

## File and Folder Structure

```
ubuntueats/
├── index.html          # Homepage
├── about.html          # Our Story
├── menu.html           # Menu (tabbed)
├── services.html       # Catering & Services
├── enquiry.html        # Reservations & Enquiries
├── contact.html        # Contact + 3 Location Maps
├── robots.txt          # SEO crawler instructions
├── sitemap.xml         # XML sitemap for search engines
├── css/
│   └── style.css       # Main external stylesheet
├── js/
│   └── main.js         # Main JavaScript file
└── images/             # (For future food photography assets)
```

---

## Timeline and Milestones

| Week | Milestone |
|------|-----------|
| 1–2  | Project research, proposal writing, organisation selection |
| 3–4  | Content research, sitemap planning, file structure setup |
| 5–6  | HTML structure for all 5 pages |
| 7–8  | CSS styling — base styles, layout, typography |
| 9    | CSS responsive design (tablet and mobile breakpoints) |
| 10   | JavaScript — navigation, tabs, form validation |
| 11   | SEO implementation (meta tags, sitemap, robots.txt) |
| 12   | Testing across browsers and devices |
| 13   | Final review, README update, GitHub push |
| 14   | Submission |

---

## Sitemap

```
Homepage (index.html)
├── Our Story (about.html)
├── Menu (menu.html)
├── Catering & Services (services.html)
├── Reservations & Enquiries (enquiry.html)
└── Contact (contact.html)
```

---

## Changelog

### Part 3 Updates
- Added JavaScript menu tab switching functionality
- Implemented full client-side form validation on all three forms
- Added scroll reveal animations with IntersectionObserver
- Added mobile navigation toggle
- Added enquiry type toggle (reservation vs catering)
- Created `robots.txt` and `sitemap.xml`
- Added SEO meta tags to all pages

### Part 2 Updates — 29 May 2026 (CSS Styling & Responsive Design)
- Created `css/style.css` with full responsive design
- Implemented CSS Grid and Flexbox layout
- Applied Ubuntu Eats brand colour palette and typography
- Added hover states, transitions and animations
- Responsive breakpoints at 1024px, 768px, 480px

### Part 1 (Initial)
- Project approved: Ubuntu Eats (Proposal 2)
- Created all 5 HTML pages with semantic structure
- Set up file and folder structure
- Added navigation links across all pages
- Integrated Google Maps embeds (contact.html)
- Initial GitHub repository created

---

## References

- Google Fonts. (2026). Abril Fatface & Source Sans Pro. Retrieved from https://fonts.google.com
- Hetzner South Africa. (2026). Dedicated Server Hosting Plans. Retrieved from https://www.hetzner.co.za
- Mozilla Developer Network. (2026). HTML, CSS & JavaScript Documentation. Retrieved from https://developer.mozilla.org
- OpenTable. (2026). Restaurant Reservation Platform Documentation. Retrieved from https://www.opentable.com/partners
- PayFast. (2026). Online Payment Integration Guide. Retrieved from https://developers.payfast.co.za
- Sanity.io. (2026). Headless CMS Documentation. Retrieved from https://www.sanity.io/docs
- Google. (2025). Restaurant SEO: Local Search Best Practices. Retrieved from https://developers.google.com/search
- Nielsen Norman Group. (2024). Restaurant Website UX Design Guidelines. Retrieved from https://www.nngroup.com
- W3C. (2024). Web Content Accessibility Guidelines (WCAG) 2.1. Retrieved from https://www.w3.org/WAI/WCAG21/
- Sitemaps.org. (2025). Sitemap Protocol Documentation. Retrieved from https://www.sitemaps.org/protocol.html

---

*This project was completed as part of the WEDE5020 Web Development (Introduction) module.*

---

## Student Details

| Field | Details |
|-------|---------|
| Student Name | Nomvuselelo Khumalo |
| Student Number | ST10523069 |
| Module | Web Development Introduction (WEDE5020) |
| Institution | The Independent Institute of Education (IIE) |
| Final PoE Submission Date | 19 June 2026 |

---

> **AI Disclosure:** This project was completed with the assistance of Claude AI (Anthropic, 2026). The student directed the AI by specifying the organisation, design choices, features, and content. All AI-generated content has been reviewed and submitted in accordance with IIE academic integrity guidelines. A full AI Disclosure Annexe with screenshots is attached to the Turnitin submission.
>
> **Reference:** Anthropic. (2026). *Claude (claude-sonnet-4-20250514)* [Large language model]. Retrieved from https://www.anthropic.com

---

*Nomvuselelo Khumalo | ST10523069 | WEDE5020 | IIE | 29 May 2026*
