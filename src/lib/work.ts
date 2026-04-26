export type Inline =
  | string
  | { text: string; href: string };

export type ListItem = {
  text: string;
  sub?: string[];
};

export type ContentBlock =
  | { type: "paragraph"; text?: string; parts?: Inline[] }
  | { type: "subheading"; text: string; level?: 4 | 5 }
  | { type: "emphasis"; text: string }
  | { type: "italicLabel"; text: string }
  | { type: "bulletList"; items: ListItem[] }
  | { type: "numberedList"; items: ListItem[] }
  | { type: "callout"; variant: "challenge" | "learning"; text: string }
  | { type: "image"; placeholder: string; caption?: string };

export type CaseStudySection = {
  kicker: string;
  heading?: string;
  blocks: ContentBlock[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  role: string;
  year?: string;
  outcome: string;
  summary?: string;
  duration?: string;
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

const p = (text: string): ContentBlock => ({ type: "paragraph", text });
const pParts = (parts: Inline[]): ContentBlock => ({ type: "paragraph", parts });
const sub = (text: string, level: 4 | 5 = 4): ContentBlock => ({
  type: "subheading",
  text,
  level,
});
const lbl = (text: string): ContentBlock => ({ type: "italicLabel", text });
const emph = (text: string): ContentBlock => ({ type: "emphasis", text });
const bullets = (items: ListItem[]): ContentBlock => ({
  type: "bulletList",
  items,
});
const numbered = (items: ListItem[]): ContentBlock => ({
  type: "numberedList",
  items,
});
const callout = (
  variant: "challenge" | "learning",
  text: string,
): ContentBlock => ({ type: "callout", variant, text });
const img = (placeholder: string, caption?: string): ContentBlock => ({
  type: "image",
  placeholder,
  caption,
});

const placeholderBody: CaseStudySection[] = [
  {
    kicker: "Brief",
    heading: "What we were asked to figure out",
    blocks: [
      p(
        "Placeholder. Replace with the framing the team came in with: who the user was, what decision had to be made, and why research was the right tool for it.",
      ),
      p("Two-to-three sentences keeps it readable on first scan."),
    ],
  },
  {
    kicker: "Approach",
    heading: "What I did",
    blocks: [
      p(
        "Placeholder. List the methods and why they were the leanest credible choice for the question. Note sample size, recruiting source, and anything that constrained the design.",
      ),
    ],
  },
  {
    kicker: "Findings",
    heading: "What we learned",
    blocks: [
      p(
        "Placeholder. Two or three findings, each one tight. Lead with the behavior change, not the user quote.",
      ),
      p("If a finding only applies to a sub-segment, say so plainly."),
    ],
  },
  {
    kicker: "Outcome",
    heading: "What it changed",
    blocks: [
      p(
        "Placeholder. Tie the work to a decision the team actually made. If a metric moved, lead with that. If the team killed the project, that is also an outcome — say it.",
      ),
    ],
  },
];

export const work: CaseStudy[] = [
  {
    slug: "coinbase-portfolio",
    title: "Coinbase Pro: Future of the Portfolio Feature",
    kicker: "Fintech · Coinbase",
    role: "User Researcher (intern)",
    duration: "8 weeks",
    team: "2 Product managers, Data scientist, Product designer",
    methods: ["Literature review", "Interviews", "Survey", "Kano analysis"],
    outcome:
      "The final presented research insights made portfolios top of mind for senior leadership.",
    body: [
      {
        kicker: "Overview",
        heading: "Project overview",
        blocks: [
          lbl("GOAL"),
          p(
            "Understand Coinbase Pro user sentiment and behavior to determine whether the portfolios feature should be built on the new Retail Advanced Trade platform (RAT) or not.",
          ),
          lbl("SITUATION"),
          p(
            "Cross-functional collaboration with the product team, engineering team, and senior leadership, culminating in an all-hands presentation.",
          ),
          lbl("IMPACT"),
          p(
            "Initial survey results were so compelling, the team asked for a research scope extension.",
          ),
          p(
            "The final presented research insights made portfolios top of mind for senior leadership. Instead of being slated for automatic deprecation, building the portfolios on RAT (or proposed substitutes) was under consideration.",
          ),
        ],
      },
      {
        kicker: "Background",
        heading: "Background and problem",
        blocks: [
          p(
            "Portfolios are a common feature across fintech products, including Coinbase Pro, that help users manage their investment strategies by separating their assets into \"folders\". ~5 million active Coinbase Pro users use portfolios.",
          ),
          p(
            "With the deprecation of Coinbase Pro, all its users were being migrated to Retail Advanced Trade (\"RAT\"). RAT had all the features of Coinbase Pro, and more, except for one: portfolios. Building portfolios in RAT would be a huge time and resource intensive feat. However, would the consequences of not having portfolios on RAT be worth it?",
          ),
        ],
      },
      {
        kicker: "Role",
        heading: "Role and contribution",
        blocks: [
          p(
            "I was the user researcher in charge of this project. I worked on it end-to-end, which included:",
          ),
          bullets([
            { text: "Creating a research plan" },
            { text: "Building and shipping the survey" },
            {
              text: "Kano and qualitative analysis on the survey results to present to the team",
            },
            { text: "Planning and creating interview guides" },
            { text: "Recruiting participants" },
            { text: "Conducting interviews" },
            {
              text: "Synthesizing insights to build product strategy recommendations.",
            },
          ]),
          p(
            "Given the business impact of the portfolios feature, this research was crucial and required cross-functional collaboration with data science, product managers, engineers, and senior leadership.",
          ),
        ],
      },
       {
        kicker: "Research Question",
        heading: "How might we understand the importance of portfolios to the trading strategy of Coinbase Pro users?",
        blocks: [
          lbl("Research goals:"),
          bullets([
            {
              text: "Determine the importance of portfolios for different users (API vs non-API users)",
              sub: [
                "How does perceived importance of portfolios differ for low vs. high-volume traders?",
              ],
            },
            {
              text: "Understand what purpose portfolios serve for users (current jobs being served)",
            },
            {
              text: "Identify risk of users migrating to competitor platforms if RAT doesn't have portfolios",
            },
          ]),
        ],
      },
      {
        kicker: "Process",
        heading: "In-depth process",
        blocks: [
          img("process diagram showing phases"),
          sub("Phase 0 (stakeholder interviews)"),
          p(
            "My first challenge was ramping up on all things crypto, Coinbase Pro, portfolios, and Retail Advanced Trade (RAT).",
          ),
          p(
            "I scheduled multiple 1:1 stakeholder conversations to understand from different teams what the user experience is and what they envision it to be. Some questions I addressed through this activity were:",
          ),
          bullets([
            { text: "Why is Coinbase Pro being deprecated and users migrated to RAT?" },
            {
              text: "Who are current Coinbase Pro users?",
              sub: ["Who are portfolio users?"],
            },
            { text: "What are the assumptions the team has about portfolio usage?" },
            { text: "What are limitations to building portfolios on RAT?" },
            { text: "What are the decisions the team wants this research to inform?" },
          ]),
          callout(
            "challenge",
            "The week I joined, Coinbase reduced its workforce by 18%. Suddenly, my project seemed inconsequential. Stakeholders I'd set up calls with had lost their jobs, had their colleagues affected, and were navigating incredible uncertainty. I offered to reschedule or, if they chose not to, used the time to give them a space to talk. While there are situations that demand pushing harder, this one deserved empathy. As the project took off, I felt the team was more willing to support me because of the relationship we established in these initial interactions.",
          ),
          sub("Phase 1 (data science collaboration and surveys)"),
          sub("Identifying users", 5),
          p(
            "I wanted our sample to consist only of active portfolio users, i.e., those who have at least 2 portfolios with >$1 balance in each.",
          ),
          sub("Addressing the research question", 5),
          pParts([
            "I leveraged the ",
            { text: "Kano model", href: "https://foldingburritos.com/blog/kano-model" },
            " to asses Coinbase Pro user sentiment on portfolios as a function of:",
          ]),
          bullets([
            {
              text: "Satisfaction (where the user lies on the spectrum of delighted to frustrated with portfolios)",
            },
            {
              text: "Functionality (how well the user thinks we've implemented and developed portfolios)",
            },
          ]),
          p(
            "I also crafted a Likert scale to get a general sense of importance of portfolios. We chose to keep it a 4-point scale to prevent users from picking the common neutral option. This wouldn't skew our results because the Kano questions would reflect any user neutrality.",
          ),
          sub("Calibration questions", 5),
          p(
            "I created calibration questions about \"limit orders\", a feature we know users find critical to trading, to map how accurate their responses on portfolios were.",
          ),
          img("Kano questions diagram"),
          sub("Phase 2 (Kano analysis and qualitative responses)"),
          p(
            "A kano analysis of the data revealed that a majority of users found portfolios a table-stakes feature and crucial to their trading.",
          ),
          p(
            "Coding the qualitative responses from the survey into themes, we identified that users leverage portfolios mainly to apply different trading strategies, manage assets of/for different people, and organise their assets for tax purposes.",
          ),
          img(
            "Kano analysis chart",
            "The numbers behind the people: the final kano analysis for the portfolios feature",
          ),
          img(
            "API vs non-API comparison chart",
            "The opinion that portfolios is crucial to trading was shared by both API and non-API users",
          ),
          p(
            "These results were shocking and contradicted the team's main assumptions",
          ),
          lbl("Extending scope of research"),
          emph(
            "Given the resources that building portfolios on RAT would take, we need to dig into the WHY and HOW behind the survey numbers",
          ),
          sub("Phase 3 (interviews)"),
          p(
            "I conducted eight 45 minute 1:1 semi-structured in-depth interviews with portfolio users (3 API users, 5 non-API users).",
          ),
          callout(
            "learning",
            "Coinbase Pro users tend to be more experienced traders. I was nervous about my interviews with them given my relative lack of technical knowledge. However, asking them to break down their thoughts and strategies not only helped me understand better, but also allowed me to identify the key jobs that portfolios served for them!",
          ),
          sub("Phase 4 (data analysis, affinity map)"),
          p(
            "I built an affinity map of the interview insights, anchoring them to the research goals and potential product strategy options.",
          ),
          img("affinity diagram", "A high-level overview of my affinity diagram"),
        ],
      },
      {
        kicker: "Insights",
        heading: "Insights and recommendations",
        blocks: [
          sub("Insights"),
          p("There were two main insights from the survey and subsequent interviews:"),
          numbered([
            {
              text: "The purposes of portfolios aren't mutually exclusive",
              sub: [
                "There seemed to be three main jobs the portfolios served for users, but they also had evident overlaps",
                "Portfolios served this purpose for users agnostic of whether they were API-users or non-API users (although API users tended to rely more heavily on portfolios for tax management)",
              ],
            },
            {
              text: "From their portfolios, users seek the date of asset acquisition, type of cryptocurrency, and bird's-eye view of current loss/gain standing",
            },
          ]),
          img(
            "purpose of portfolios diagram",
            "Purpose of portfolios: although some of these purposes of portfolios were known beforehand, my analysis highlighted the their interconnectedness and overlap",
          ),
          sub("Recommendation"),
          emph(
            "Based on the insights, I proposed that it was worth investing in building portfolios on RAT.",
          ),
          p(
            "However, I acknowledged the extreme time and resource constraints the engineering and product teams were already under. Therefore, I recommended substitutes that could replace portfolios or be adapted to work as \"band-aid\" solutions: addressing user needs while accounting for business realities.",
          ),
          callout(
            "learning",
            "I knew that for my research to be actionable I had to go beyond just the \"why\" and emphasize on the \"so what?\". Therefore, although the scope of the project only included understanding user sentiment and behavior with respect to portfolios, I built on my insights to recommend substitutes for the team to consider and explore. In the future, it would have helped to have this as a part of my research goals from the beginning of the project.",
          ),
        ],
      },
      {
        kicker: "Impact",
        heading: "Impact",
        blocks: [
          p(
            "In the short term, my research shifted the conversation of portfolios on RAT. It got senior leadership from engineering, product design, and product management into a (virtual) room to brainstorm options and next steps.",
          ),
          p(
            "In the long term, my research and recommendations informed product strategy. Even if the team decided to not go ahead with building portfolios, or a substitute, it would be an informed decision: they would be able to prepare for its consequences instead of being caught off-guard.",
          ),
          img(
            "Slack messages",
            "Slack messages from the Group Product Manager that were sent on the RAT group after I presented my research on the portfolios feature - he can't stop thinking about it!",
          ),
        ],
      },
      {
        kicker: "Reflection",
        blocks: [
          sub("What I learnt:"),
          bullets([
            {
              text: "Disagree and commit. As a researcher, my interactions with users made me have a strong opinion on what outcome would be best for them. However, this project highlighted how many factors go into making large-scale product decisions resulting in an outcome that might not be fully aligned with what's best for the end user. I learned how to be objective: communicate my research effectively, advocate for the users where necessary (asking \"How will this give our users what they need?\") and then aligning with the final decision the team arrives at.",
            },
          ]),
          sub("What went well"),
          bullets([
            {
              text: "Advocating for myself as a researcher. Because of the product consequences of my research, there was a time pressure. Occasionally, the product team wanted research to be conducted and analysed in a time frame that was unrealistic and would negatively impact the quality of the insights. I was able to advocate for the time and resources I needed to conduct rigorous research, while keeping in mind product timeline constraints.",
            },
          ]),
          sub("Next time…"),
          bullets([
            {
              text: "User segmentation. Given the focus on API users and developers, I would have liked to have been more intentional with my recruiting to ensure I was getting more of a representation from this segment.",
            },
          ]),
        ],
      },
    ],
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
