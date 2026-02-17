# Fathom Research & Strategy - Website V2.0

Fast. Focused. Useful. We challenge what you think research is.

## Project Overview

This is the V2.0 rebuild of the Fathom Research & Strategy website, built with Eleventy (11ty) static site generator. The site features:

- **Pool metaphor** on homepage with interactive bubbles representing client challenges
- **Philosophy showcase** connecting core beliefs to real business outcomes
- **NASCAR case study** demonstrating "Research is a reframe, not a report"
- **48-Hour Promise** on the Request Proposal page
- **Brand-compliant design** following Fathom's visual identity and voice guidelines

## Tech Stack

- **Eleventy (11ty)** - Static site generator
- **Nunjucks** - Templating engine
- **CSS3** - Custom styling with CSS variables for brand colors
- **Vanilla JavaScript** - Lightweight interactions
- **Google Fonts** - Montserrat, IBM Plex Sans, IBM Plex Serif

## Project Structure

```
fathom-v2/
├── .eleventy.js              # Eleventy configuration
├── package.json              # Dependencies and scripts
├── src/
│   ├── _includes/            # Layout templates
│   │   └── base.njk          # Base HTML template
│   ├── _data/                # Global data files (future use)
│   ├── css/
│   │   └── main.css          # Main stylesheet with brand colors
│   ├── js/
│   │   └── main.js           # JavaScript for interactions
│   ├── images/
│   │   └── fathom-logo.svg   # Placeholder logo
│   ├── case-studies/
│   │   └── nascar.njk        # NASCAR case study page
│   ├── index.njk             # Homepage
│   └── request-proposal.njk  # Request Proposal page
└── public/                   # Build output (generated)
```

## Getting Started

### Installation

```bash
cd fathom-v2
npm install
```

### Development

Run the development server with hot reload:

```bash
npm start
```

Visit `http://localhost:8080` to view the site.

### Build

Build the site for production:

```bash
npm run build
```

The output will be in the `public/` directory.

## Brand Guidelines

### Colors

The site uses Fathom's official brand colors:

- **Fathom Teal** (#00D6B3) - Primary brand color, CTAs, accents
- **Fathom Navy** (#071A2B) - Backgrounds, headers, text
- **Bright Blue** (#2274F8) - Interactive elements, highlights
- **Deep Purple** (#3A3556) - Secondary backgrounds
- **Neutrals** - Grays from #F1F1F1 to #2C3E50

### Typography

- **Montserrat** - Headings, titles, display text (weights: 300-700)
- **IBM Plex Sans** - Body text, UI elements (weights: 300-600)
- **IBM Plex Serif** - Pull quotes, testimonials (weights: 300-600)

### Voice & Tone

Fathom's voice is:
- **Edgy (with credibility)** - Challenge the status quo, back it up with expertise
- **Casual (not careless)** - Conversational, direct, like CMOs talk to each other
- **Radically human** - Authentic partnership, honest counsel
- **Fast and simple (not shallow)** - Speed without sacrificing depth

Tone baseline: **7.5/10** (1=safe corporate, 10=polarizing punk)

## Current Pages

### Homepage (`/`)

**Hero Section - Pool Metaphor**
- Fathom logo centered
- Interactive bubbles with client challenges:
  - "I need a proposal on Friday, and today is Wednesday"
  - "I don't have 3 months to wait for traditional research"
  - "Most research feels like a receipt for what I paid for"
- CTA: "Request Proposal"

**Positioning Section**
- Bold statement: "We challenge what you think research is. Fast. Focused. Useful."

**Philosophy Showcase (4 sections)**
1. NASCAR case study - "Research is a reframe, not a report"
2. Tech positioning - "The perfect answer takes too long, useful ones get used"
3. CPG repositioning - "Strategy without research is fiction..."
4. Media investment - "We stand with clients in the decision, not behind the work"

**Company Overview**
- How we think about research and strategy
- AI-human boundary explanation
- Proof points (Walmart, Blue Cross Blue Shield)

**Testimonials**
- 3 client testimonials (placeholder content)

### NASCAR Case Study (`/case-studies/nascar`)

Full case study demonstrating "Research is a reframe, not a report" philosophy:
- Challenge: What drives NASCAR fans?
- Approach: 500+ interviews, Category Entry Points analysis
- Insight: NASCAR makes you feel viscerally alive
- Impact: 'Hell Yeah' campaign platform

### Request Proposal (`/request-proposal`)

**48-Hour Promise**
- Explanation of AI-enabled fast turnaround
- Clear value proposition

**Intake Form**
- Name
- Company name
- Brand name (optional)
- Challenge description
- Submit button

## Next Steps & Future Development

### Week of [Next Week] - Interactive Pool Animation

**Planned enhancements:**
1. Full scroll-triggered animation for pool metaphor
2. Bubbles and debris clearing away as user scrolls
3. Fathom logo reveal at "bottom of pool"
4. Smooth transitions between sections

### Content Additions Needed

**Case Studies**
- Add 3 more complete case studies for placeholder philosophy sections
- Update with real client names (when cleared)
- Add case study imagery

**Testimonials**
- Replace placeholder testimonials with real client quotes
- Get approval for client names and titles

**About Us Page**
- Full pool metaphor experience (hero with story sentence)
- Brand story and perspective
- Values (who we are / who we are not)
- Team section

**Additional Pages**
- Services/Methodology page
- Full case study index
- Contact page (if separate from Request Proposal)

### Technical Improvements

**Performance**
- Image optimization
- Lazy loading for case study images
- CSS/JS minification for production

**Accessibility**
- ARIA labels for interactive elements
- Keyboard navigation for bubbles
- Screen reader optimization

**SEO**
- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data for case studies

**Form Handling**
- Backend integration for proposal form
- Email notifications
- Form validation
- Success/error states

## Brand Assets Needed

- [x] High-resolution Fathom logo (SVG) - **COMPLETE**
- [ ] Case study imagery (NASCAR and others)
- [ ] Client logos for testimonials/proof points
- [ ] Team photos (for future About page)
- [ ] Additional brand graphics/patterns

## Logo Usage

The project includes all official Fathom logo variations:

**Header:** `Fathom_LockUp_Horizontal_Teal.svg` (teal horizontal lockup)
**Hero Section:** `Fathom_Wordmark_White.svg` (white wordmark, centered)

**Available logos:**
- Icon variations: Navy, Teal, White
- Horizontal lockups: Navy, Teal, White
- Vertical lockup: White
- Wordmark: White

## Deployment

### GitHub Pages (Option 1)

1. Build the site: `npm run build`
2. Push `public/` directory to `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Netlify (Option 2)

1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `public`
4. Deploy automatically on push

## Notes

- Current build uses **placeholder testimonials** - replace with real client quotes
- **Placeholder case studies** for 3 of 4 philosophy sections - need real content
- Pool animation is **static mockup** - interactive version planned for next week
- **Logos are in place** - Using official Fathom SVG assets
- Form submission has **no backend** - needs integration with email/CRM
- **Fixed header** added with teal horizontal lockup logo and navigation

## Brand Voice Reminders

When writing content for this site:

✅ **Do:**
- Lead with the enemy/problem, not promises
- Use short, declarative sentences (10-20 words)
- Write like CSOs talk, not like agencies talk about them
- Show proof (timelines, metrics, named clients when cleared)
- Be confident without being arrogant

❌ **Don't:**
- Use corporate jargon ("leverage," "synergy," "comprehensive solutions")
- Use AI writing tells ("delve," "landscape," "tapestry")
- Hedge recommendations ("perhaps," "maybe," "consider exploring")
- Lead with features instead of outcomes
- Use em dashes excessively

## Contact

For questions about this project, contact Danni at Fathom Research & Strategy.

---

**Version:** 2.0.0  
**Last Updated:** February 2026  
**Status:** Homepage complete, interactive animation pending
# fathom-v2
