# Portfolio Audit — Devwrat Raval
Date: April 6, 2026

---

## What's Working Well

- Clean, minimal design — easy to read, not overwhelming
- Strong project bullet points with real metrics (50+ users, 70% network reduction, 50ms latency)
- Dark/light mode, agent/human toggle — shows you built the portfolio itself
- Good section structure overall

---

## Flaws & Recommendations

### 1. No live project links or GitHub links on projects (Critical)
Recruiters want to click into your work. Right now projects are just text. Every project needs a **Live Demo** and/or **GitHub repo** link. Without it, the work feels unverifiable.

**Fix:** Add `link` prop to each ExperienceItem in the Projects section pointing to the GitHub repo or live URL.

---

### 2. Bio says "polymath" — red flag for recruiters
Calling yourself a polymath is a bold claim that can read as arrogant. Recruiters spend 10–30 seconds on a portfolio. "polymath" makes them roll their eyes, not lean in.

**Fix:** Replace with something grounded and specific to your target role (SWE/full-stack). e.g. *"a developer who thinks beyond the code — combining technical depth with product intuition to build things people actually want."*

---

### 3. Only one internship in Experience — thin work history
One 4-month internship is sparse. Projects need to compensate as the main proof of ability.

**Fix:** Make projects the hero section. Add live links, screenshots, or demo GIFs. Pin your strongest project first.

---

### 4. No resume/CV download button
Every recruiter wants to forward a PDF. There is no way to download a resume from the site.

**Fix:** Add a "Download Resume" button/link in the hero section or navbar.

---

### 5. "Why I Build" section is buried too low
It's placed after Certifications — most recruiters won't scroll that far. It's good human content but loses its impact at the bottom.

**Fix:** Move it directly after the bio/hero text, or cut it from the recruiter-facing flow entirely.

---

### 6. Certifications section is a weak signal
5 AI certifications with no issuers listed (LinkedIn Learning? Coursera? Google?) look like quick completions with no weight.

**Fix:** Add the issuing platform next to each cert, or remove the section and use the space for stronger proof of work.

---

### 7. No "Open to work" / availability signal
Recruiters don't know if you're actively looking. A missing availability signal means missed outreach.

**Fix:** Add a subtle "Open to full-time opportunities" line in the hero or Get in Touch section.

---

### 8. No role/title under your name
Your name is front and center but there is no role label. Recruiters can't instantly scan your specialty.

**Fix:** Add a title line directly under your name — e.g. *"Full-Stack Developer · React · Node.js · TypeScript"*

---

### 9. Agent mode toggle may confuse non-technical visitors
It's a clever dev trick, but unfamiliar visitors (including non-technical recruiters) won't know what it does.

**Fix:** Add a tooltip or label (e.g. "Raw / Formatted") so it's self-explanatory at a glance.

---

## Priority Order for Impact

| Priority | Fix                                              |
|----------|--------------------------------------------------|
| 1        | Add GitHub + live links to all 3 projects        |
| 2        | Add a role/title under your name                 |
| 3        | Add "Download Resume" button                     |
| 4        | Add "Open to opportunities" in the hero          |
| 5        | Remove or rewrite the "polymath" line            |
| 6        | Move "Why I Build" up or remove it               |
| 7        | Add issuers to certifications or remove section  |
| 8        | Label the agent/human mode toggle clearly        |
