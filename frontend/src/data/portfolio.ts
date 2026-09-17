import type { PortfolioItem } from "@/types";

/**
 * DEMO / PLACEHOLDER PROJECTS
 * ---------------------------------------------------------------------
 * These are illustrative concept builds, not real client work. Each one
 * is explicitly flagged with isDemo: true, and that flag drives a visible
 * "Demo Project" badge in the UI. Replace with real, permissioned client
 * projects as they become available — do not remove the isDemo flag from
 * a project unless it is an actual delivered engagement.
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: "SP Real Estate",
    name: "SP Real Estate",
    category: "Business",
    description: "A concept corporate site for a fictional advisory firm, focused on credibility and clear service positioning.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: ["Service pages", "Case study layout", "Lead capture form"],
    image: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%231e1b4b'/%3E%3Cstop offset='100%25' stop-color='%23312e81'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g1)'/%3E%3Ccircle cx='400' cy='300' r='180' fill='%236366f1' opacity='0.2'/%3E%3Ctext x='400' y='310' fill='%23e0e7ff' font-family='sans-serif' font-size='32' font-weight='bold' text-anchor='middle'%3ENorthbridge Consulting%3C/text%3E%3C/svg%3E",
    caseStudyUrl: "#",
    isDemo: true,
  },
  {
    id: "loomcraft-goods",
    name: "Loomcraft Goods",
    category: "E-Commerce",
    description: "A concept storefront for a handmade-textiles brand, designed around product storytelling and a clean checkout flow.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    features: ["Product catalog", "Cart & checkout UI", "Mobile-first browsing"],
    image: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='g2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%234c1d95'/%3E%3Cstop offset='100%25' stop-color='%23581c87'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g2)'/%3E%3Ccircle cx='400' cy='300' r='180' fill='%23a855f7' opacity='0.2'/%3E%3Ctext x='400' y='310' fill='%23f3e8ff' font-family='sans-serif' font-size='32' font-weight='bold' text-anchor='middle'%3ELoomcraft Goods%3C/text%3E%3C/svg%3E",
    caseStudyUrl: "#",
    isDemo: true,
  },
  {
    id: "JR-portfolio",
    name: "Jaswanth Rathore",
    category: "Portfolio",
    description: "A concept portfolio for a product designer, built around large project imagery and a minimal case-study format.",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    features: ["Case study pages", "Animated transitions", "Resume download"],
    image: "https://github.com/Jass-pvt/jr-portfolio/blob/main/portfoilo.jpeg?raw=true",
    liveUrl: 'https://jaswanthrathore.vercel.app/',
    caseStudyUrl: "#",
    isDemo: true,
  },
  {
    id: "aria-and-dev-wedding",
    name: "Aria & Dev — Wedding",
    category: "Event",
    description: "A concept wedding website with RSVP collection, event schedule, and a photo gallery.",
    technologies: ["React", "TypeScript", "Express"],
    features: ["RSVP form", "Event countdown", "Photo gallery"],
    image: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='g4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23831843'/%3E%3Cstop offset='100%25' stop-color='%23881337'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g4)'/%3E%3Ccircle cx='400' cy='300' r='180' fill='%23f43f5e' opacity='0.2'/%3E%3Ctext x='400' y='310' fill='%23ffe4e6' font-family='sans-serif' font-size='32' font-weight='bold' text-anchor='middle'%3EAria %26 Dev Wedding%3C/text%3E%3C/svg%3E",
    caseStudyUrl: "#",
    isDemo: true,
  },
  {
    id: "fieldnote-app",
    name: "Fieldnote",
    category: "Web Application",
    description: "A concept field-reporting web app for small survey teams, with structured forms and a submissions log.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    features: ["Dynamic forms", "Submission history", "Role-free simple workflow"],
    image: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='g5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23064e3b'/%3E%3Cstop offset='100%25' stop-color='%23022c22'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g5)'/%3E%3Ccircle cx='400' cy='300' r='180' fill='%2310b981' opacity='0.2'/%3E%3Ctext x='400' y='310' fill='%23d1fae5' font-family='sans-serif' font-size='32' font-weight='bold' text-anchor='middle'%3EFieldnote App%3C/text%3E%3C/svg%3E",
    caseStudyUrl: "#",
    isDemo: true,
  },
  {
    id: "verdant-cafe",
    name: "Verdant Café",
    category: "Business",
    description: "A concept single-location café site emphasizing menu presentation and location/hours clarity.",
    technologies: ["React", "Tailwind CSS"],
    features: ["Menu showcase", "Map & hours", "Reservation enquiry form"],
    image: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='g6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2314532d'/%3E%3Cstop offset='100%25' stop-color='%23052e16'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g6)'/%3E%3Ccircle cx='400' cy='300' r='180' fill='%2322c55e' opacity='0.2'/%3E%3Ctext x='400' y='310' fill='%23dcfce7' font-family='sans-serif' font-size='32' font-weight='bold' text-anchor='middle'%3EVerdant Café%3C/text%3E%3C/svg%3E",
    caseStudyUrl: "#",
    isDemo: true,
  },
];

export const portfolioCategories: PortfolioItem["category"][] = [
  "Business",
  "E-Commerce",
  "Portfolio",
  "Event",
  "Web Application",
];
