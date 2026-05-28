## Yash Tyagi — Data Analyst Portfolio

Single-page React + Tailwind site following the PRD exactly. Editorial minimalism, Dymas Alfin–inspired: light base with one dark section, massive typographic hero, pill tags, ghost watermarks behind section labels, subtle cloud/noise background.

### Stack & setup
- Scaffold default web_app (TanStack Start template).
- Google Fonts: Archivo Black (display), Syne (headings), DM Sans (body), DM Mono (tags).
- Design tokens in CSS (HSL): light bg `#F2F2F2`/`#FFF`, dark `#1A1A1A`/`#111`, text `#0D0D0D`/`#555`, accent green `#22C55E`, pill `#EBEBEB`/border `#D4D4D4`.
- Soft cloud gradient + noise texture body background.

### Sections (single page, anchor nav)
1. **Sticky Nav** — left: green-dot "Open to Work" pill; center: Work [2] · Skills [5] · Experience [1] · Contact; right: dark "Hire Me ↗" pill. Frosted blur on scroll.
2. **Hero** — huge `YASH TYAGI` (outline first name, filled last) overlaying a soft cloud background. Left: role "Business Intelligence Developer & Data Analyst", tagline, "Let's collaborate ↗" CTA, "Download Resume" secondary. Right: LinkedIn / GitHub pill buttons.
3. **About** — short intro from resume (B.Tech ECE final year, ABES, CGPA 6.9, Power BI/SQL/Python passion).
4. **/SKILLS** — categorized pill groups (BI & Viz, Database, Programming, Productivity, Soft Skills).
5. **/SELECTED WORK** — ghost "PORTFOLIO" watermark, filter tabs (All / Data Analysis / BI Dashboard), 2 project cards (Sales Performance Dashboard, Student Performance Analysis) with tags + ↗ link.
6. **/EXPERIENCE** — dark `#1A1A1A` card, ghost "EXPERIENCE" watermark, "1 year of learning" badge, Forage GenAI Data Analytics entry expandable to sub-bullets, right-aligned dates.
7. **/SERVICE** — accordion (single-open): Data Analysis & Reporting, Power BI Dashboards, SQL Data Querying, Presentation & Storytelling.
8. **Contact CTA** — green-dot "Available for New Project" pill, "HAVE A PROJECT IN MIND?", subtext, "Contact Me ↗" mailto button.
9. **Footer bar** — Yash Tyagi avatar pill + LinkedIn + GitHub pill links.

### Interactions
- Smooth-scroll anchor nav, active link highlight on scroll.
- Project filter tabs.
- Experience + Services accordions.
- Hover lift on cards, arrow nudge on links.
- Fully responsive (mobile stacks hero, collapses nav to hamburger).

### SEO
Title "Yash Tyagi | Data Analyst & BI Developer", meta description, OG tags, semantic HTML, single H1, alt text.

### Assets
- Generate soft cloud background image.
- Generate dark placeholder thumbnails for the 2 project cards (Power BI dashboard mock, Python/Excel chart mock).
- Avatar: monogram "YT" placeholder pill (no photo provided).
- Resume PDF: copy uploaded resume to `public/` for download.

### Out of scope (per PRD)
Blog, CMS, backend form, analytics dashboard. Contact uses `mailto:tyagiy64@gmail.com`.
