export type CaseStudySection = {
  kicker: string;
  heading: string;
  paragraphs: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  role: string;
  year: string;
  outcome: string;
  summary: string;
  team?: string;
  methods?: string[];
  metric?: {
    from?: number;
    to: number;
    suffix?: string;
    label: string;
  };
  gated?: boolean;
  body?: CaseStudySection[];
};

const placeholderBody: CaseStudySection[] = [
  {
    kicker: "Brief",
    heading: "What we were asked to figure out",
    paragraphs: [
      "Placeholder. Replace with the framing the team came in with: who the user was, what decision had to be made, and why research was the right tool for it.",
      "Two-to-three sentences keeps it readable on first scan.",
    ],
  },
  {
    kicker: "Approach",
    heading: "What I did",
    paragraphs: [
      "Placeholder. List the methods and why they were the leanest credible choice for the question. Note sample size, recruiting source, and anything that constrained the design.",
    ],
  },
  {
    kicker: "Findings",
    heading: "What we learned",
    paragraphs: [
      "Placeholder. Two or three findings, each one tight. Lead with the behavior change, not the user quote.",
      "If a finding only applies to a sub-segment, say so plainly.",
    ],
  },
  {
    kicker: "Outcome",
    heading: "What it changed",
    paragraphs: [
      "Placeholder. Tie the work to a decision the team actually made. If a metric moved, lead with that. If the team killed the project, that is also an outcome — say it.",
    ],
  },
];

export const work: CaseStudy[] = [
  {
    slug: "coinbase-portfolio",
    title: "Rebuilding the portfolio for Coinbase's largest growth segment",
    kicker: "Fintech · Coinbase",
    role: "Lead UX researcher",
    year: "2024",
    outcome:
      "Reframed how millions of holders see their assets, unlocking the highest-engagement screen on the app.",
    summary:
      "The portfolio screen is where most Coinbase customers spend their first thirty seconds in the app. Research drove a redesign that reframed what a portfolio is — and what it should help you do next.",
    team: "1 designer, 1 PM, 4 engineers",
    methods: ["Diary studies", "Usability testing", "Quant survey"],
    body: placeholderBody,
  },
  {
    slug: "coinbase-accessibility",
    title: "Making Coinbase usable for traders who don't see the screen",
    kicker: "Fintech · Accessibility",
    role: "UX researcher",
    year: "2023",
    outcome:
      "Validated a screen-reader-first trading flow that shipped to every Coinbase mobile customer.",
    summary:
      "Trading flows had failed accessibility audits for years. Research surfaced where assistive-tech users actually got stuck, and built a path the team could ship.",
    team: "2 designers, 1 PM, 6 engineers, accessibility consultancy",
    methods: ["Assistive-tech sessions", "Audit synthesis", "Comparative review"],
    body: placeholderBody,
  },
  {
    slug: "e-learning",
    title: "From 5% to 86% completion: redesigning a corporate training course",
    kicker: "Edtech · Learning design",
    role: "Researcher and instructional designer",
    year: "2022",
    outcome:
      "Rebuilt a course nobody finished into one most people did, using behavioral science to find the friction.",
    summary:
      "A required compliance course had a 5% completion rate. A behavioral diagnosis — not a content rewrite — closed the gap.",
    team: "Solo, with stakeholder reviews",
    methods: ["Behavioral diagnosis", "Funnel analysis", "Pre/post comparison"],
    metric: {
      from: 5,
      to: 86,
      suffix: "%",
      label: "Completion rate",
    },
    body: placeholderBody,
  },
  {
    slug: "fm-global",
    title: "Insurance research, under NDA",
    kicker: "Insurance · NDA",
    role: "UX researcher",
    year: "2021",
    outcome:
      "Mixed-methods study with FM Global. Available on request — see passcode below.",
    summary:
      "This case study is gated. Enter the passcode you were given to read the full write-up.",
    gated: true,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return work.find((c) => c.slug === slug);
}

export function getAdjacentCaseStudies(slug: string) {
  const i = work.findIndex((c) => c.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: i > 0 ? work[i - 1] : undefined,
    next: i < work.length - 1 ? work[i + 1] : undefined,
  };
}
