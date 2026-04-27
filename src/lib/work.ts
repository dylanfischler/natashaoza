export type Inline =
  | string
  | { text: string; href: string };

export type ListItem = {
  text: string;
  sub?: string[];
};

export type ContentBlock =
  | { type: "paragraph"; text?: string; parts?: Inline[]; italic?: boolean }
  | { type: "subheading"; text: string; level?: 4 | 5 }
  | { type: "emphasis"; text: string }
  | { type: "italicLabel"; text: string }
  | { type: "bulletList"; items: ListItem[] }
  | { type: "numberedList"; items: ListItem[] }
  | { type: "callout"; variant: "challenge" | "learning"; text: string }
  | { type: "image"; placeholder: string; src?: string; caption?: string };

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
const pi = (text: string): ContentBlock => ({ type: "paragraph", text, italic: true });
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
const img = (placeholder: string, caption?: string, src?: string): ContentBlock => ({
  type: "image",
  placeholder,
  caption,
  src,
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
          img("process diagram showing phases", undefined, "/coinbase_portfolios/1_process_diagram.png"),
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
          img("Kano questions diagram (part 1)", undefined, "/coinbase_portfolios/2_1_kano_Qs_1.png"),
          img("Kano questions diagram (part 2)", undefined, "/coinbase_portfolios/2_2_Kano_Qs_2.png"),
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
            "/coinbase_portfolios/3_kano_analysis.png",
          ),
          img(
            "API vs non-API comparison chart",
            "The opinion that portfolios is crucial to trading was shared by both API and non-API users",
            "/coinbase_portfolios/4_API_vs_non_API_chart.png",
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
          img("affinity diagram", "A high-level overview of my affinity diagram", "/coinbase_portfolios/5_affinity_diagram.png"),
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
            "/coinbase_portfolios/6_purpose_of_portfolios.png",
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
            "/coinbase_portfolios/7_slack_messages.png",
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
    title: "Coinbase Accessibility",
    kicker: "Fintech · Accessibility",
    role: "User Researcher (intern)",
    duration: "6 weeks",
    team: "3 Researchers, Accessibility Lead",
    methods: ["Industry & literature review (best practices)", "Interviews"],
    outcome:
      "Our 25+ insight-based recommendations addressed 8 severity 1 issues identified in the audit and were added to the Coinbase Design System accessibility main page.",
    body: [
      {
        kicker: "Overview",
        heading: "Project overview",
        blocks: [
          lbl("GOAL"),
          p(
            "Understand the behaviors and pain points of those who use assistive technology for data visualization to inform product design decisions",
          ),
          lbl("SITUATION"),
          p(
            "Cross-functional collaboration with other researchers, product designers, and engineers after an accessibility audit to improve accessibility components of Coinbase Design System",
          ),
          lbl("IMPACT"),
          p(
            "Our 25+ insight-based recommendations addressed multiple severity 1 issues identified in the audit and were added to Coinbase Accessibility main page",
          ),
        ],
      },
      {
        kicker: "Background",
        heading: "Background and problem",
        blocks: [
          p(
            "As a trading platform, Coinbase relies heavily on real-time statistics and data visualizations to convey complicated information while enabling users to complete small, but consequential, actions. Coinbase has over 100 million verified users. However, not all of these users experience the visualizations in the same way. Approximately 23% of the global population has a visual impairment, some of whom require assistive technologies (ATs) to engage with the online world.",
          ),
        ],
      },
      {
        kicker: "Role",
        heading: "Role and contribution",
        blocks: [
          p(
            "I was one of four user researcher interns working on this project. Having the most product experience, I took the lead on analyzing the insights keeping in mind that we wanted them to be action-oriented and mapped to specific product strategies. I also articulated our recommendations in the final Coinbase Design System documentation.",
          ),
        ],
      },
      {
        kicker: "Research Question",
        heading:
          "How do users of assistive technology (AT) best interpret, navigate, and interact with data visualizations?",
        blocks: [
          lbl("Research goals:"),
          bullets([
            {
              text: "Understand what an accessible user experience in the context of data visualization is",
            },
            {
              text: "Identify major pain points and workarounds that AT users have when interacting with data visualizations",
            },
            {
              text: "Establish which data visualizations are most appropriate for specific ATs, and how they can be adapted to be more appropriate",
            },
          ]),
        ],
      },
      {
        kicker: "Process",
        heading: "Process",
        blocks: [
          img("Process diagram with multiple phases", undefined, "/coinbase_accessibility/1_process_diagram.png"),
          sub("Phase 1 (Foundational Research)"),
          p(
            "In order to conduct effective and empathetic interviews, we wanted to build our foundational knowledge in two main areas: understanding ATs and what accessibility means in the Coinbase context.",
          ),
          sub("Understanding Assistive Technology", 5),
          pi(
            "Literature review, expert interviews (e.g., the accessibility lead at Coinbase), conversations with users of ATs through the Coinbase network",
          ),
          bullets([
            { text: "What are the different kinds of AT?" },
            { text: "What does each entail?" },
            { text: "How does each influence the user's experience?" },
          ]),
          sub("Accessibility in the Coinbase context", 5),
          pi(
            "Internal stakeholder interviews with the Coinbase Staff Accessibility Lead, Staff User Researcher who'd conducted initial Coinbase accessibility research, and Coinbase Design System designers",
          ),
          bullets([
            { text: "What does an accessible experience mean for Coinbase?" },
            {
              text: "What are the Coinbase's urgent and/or important needs in this context?",
            },
            { text: "Are there limitations Coinbase has that we should know?" },
            {
              text: "How can we ensure our product recommendations are as helpful and actionable as possible for the team? (i.e., supporting information like examples, their structure, and format of presentation)",
            },
          ]),
          sub("Phase 2 (Interviews)"),
          pParts([
            "We leveraged all the information we'd collected during Phase 1 to build our in-depth interview discussion guides, anchored to our research questions and goals. To conduct our interviews, we used ",
            { text: "Fable", href: "https://makeitfable.com/" },
            ": a platform built to connect to people with disabilities for user research and accessibility testing.",
          ]),
          callout(
            "challenge",
            "Given the lack of experience we had with ATs, it wasn't easy to visualize the experiences the participants were describing. We addressed this by requesting the participants to share their screens and show us while talking through their experiences. This allowed crucial contextual nuances, like what made them hesitate or zoom in, to emerge and provided us with tangible examples (and video clips!) to present with our final recommendations.",
          ),
          sub("Phase 3 (Data Analysis and Synthesis)"),
          p(
            "We built an affinity map to identify and extract themes and insights from our interviews. Leveraging tags, we incorporated tone and user sentiment (e.g., positive or negative experience) into our insight sticky notes. The themes reflected our goal of informing product and design decisions – e.g., displaying evolving information, receiving feedback on system change of state, and types or format of data visualizations.",
          ),
          img("Affinity diagram", "A high-level overview of our affinity diagram", "/coinbase_accessibility/2_affinity_diagram.png"),
        ],
      },
      {
        kicker: "Insights",
        heading: "Insights and recommendations",
        blocks: [
          p(
            "We had five key insights with multiple product and design recommendations addressing different aspects of each.",
          ),
          img("Insight framing inspiration", "Our insipration for framing our insights", "/coinbase_accessibility/3_insight_inspiration.png"),
          img(
            "5 key insights and product recommendations",
            "Our 5 key insights and a few product recommendations that addressed each",
            "/coinbase_accessibility/4_key_insights_and_recs.png",
          ),
          sub("Presenting the Recommendations"),
          p(
            "We were lucky to have multiple opportunities to present our findings and recommendations to the research team and the entire Coinbase Design System team (researchers, product designers, illustrators, product managers, and engineers).",
          ),
          callout(
            "learning",
            "Our lack of context made it tricky to relate to the experiences of our participants and we knew our audience would experience something similar. Therefore, we incorporated video clips of users showing what they go through to support our insights and final recommendations. This enabled our audience to share the participants' experiences and highlighted the importance of implementing our recommendations.",
          ),
        ],
      },
      {
        kicker: "Impact",
        heading: "Impact",
        blocks: [
          p(
            "Our work gave the crucial task of making the Coinbase experience more inclusive to users of assistive technology the eyes it deserved.",
          ),
          bullets([
            {
              text: "In the short term, our recommendations addressed 8 severity 1 issues that the accessibility audit of Coinbase's products identified. Our recommendations were also added to the Coinbase Design System accessibility main page – putting it front and center for all data visualizations going forward.",
            },
            {
              text: "In the long term, we're hoping that this sets the ball rolling to make Coinbase, and other visualization-heavy digital experiences, more mindful of and cater to its assistive technology users.",
            },
          ]),
        ],
      },
      {
        kicker: "Reflection",
        blocks: [
          sub("What went well"),
          bullets([
            {
              text: "Navigating sensitive issues. Interviewing the participants was initially nerve wracking. However, by making the extra effort to educate ourselves and speak to experts in the field, the team and I were able to probe deeper during interviews while being mindful and empathetic towards our users so they never felt uncomfortable or offended.",
            },
          ]),
          sub("Next time…"),
          bullets([
            {
              text: "Performing a task analysis. In the future, or if we'd had more time, it would be great to perform a task analysis. Although users shared their screens with us to walk us through certain examples, providing more structure to it would have been helpful in validating our recommendations!",
            },
          ]),
        ],
      },
    ],
  },
  {
    slug: "e-learning",
    title: "Enhancing User Experience on an E-Learning Platform",
    kicker: "Edtech · X Billion Skills Lab",
    role: "User Researcher and Product Strategist",
    duration: "6 weeks",
    team: "3 Designers, 2 Developers, CEO",
    methods: ["Industry & literature review", "Interviews", "Moderated Usability Test"],
    outcome:
      "Both of my recommendations were implemented – drastically improving user feedback in the short run and, in the long run along with other iterations, course completion rates.",
    metric: {
      from: 5,
      to: 86,
      suffix: "%",
      label: "Completion rate",
    },
    body: [
      {
        kicker: "Overview",
        heading: "Project overview",
        blocks: [
          lbl("GOAL"),
          p(
            "Identify key usability issues present on the learning platform to inform and guide iterative product redesign",
          ),
          lbl("SITUATION"),
          p(
            "As the sole researcher, collaborated with design and technology teams at a bootstrap startup (early stage) with 7,000+ users",
          ),
          lbl("IMPACT"),
          p(
            "Design and technology teams reworked product timelines to prioritise and implement my recommendations",
          ),
          bullets([
            { text: "Increased NPS score from <10% to 38%" },
            { text: "Increased course completion rate from 5% to 86%" },
          ]),
        ],
      },
      {
        kicker: "Background",
        heading: "Background and problem",
        blocks: [
          p(
            "As the Learning Experience and Curriculum Architect at X Billion Skills Lab, I had presented the generative insights and recommendations that the features of the learning platform were built on. For the purpose of this case, I'm going to talk about the next, evaluative phase: testing of our platform!",
          ),
          p(
            "Despite all our efforts, course completion rate plateaued at the industry average ~5%. We wanted to identify key usability issues that prevented learners from sticking with the learning plan and completing the course. As a startup, product development was progressing rapidly. Therefore, if I wanted my recommendations to be implemented, I had to be quick. Balancing research rigor with resource constraints was what this project demanded!",
          ),
        ],
      },
      {
        kicker: "Role",
        heading: "Role and contribution",
        blocks: [
          p(
            "I was the sole user researcher on the team, and at the company. I was single-handedly in charge of:",
          ),
          bullets([
            {
              text: "Planning the research (designing usability tests, building research plan, organizing the equipment for the usability tests)",
            },
            { text: "Screening and recruiting participants" },
            { text: "Conducting the moderated usability tests" },
            { text: "Analyzing the data" },
            { text: "Presenting insight-based recommendations to the team" },
            {
              text: "Ensuring the recommendations were implemented staying true to the needs of the users",
            },
          ]),
          p(
            "As a team of one on a tight deadline, I had to prioritize, identify workarounds, and adapt to the constantly evolving situation.",
          ),
          p(
            "To implement my recommendations, I collaborated closely with the design team (Senior Design Architect and 2 graphic designers) and the technology team (Senior Technology architect and senior developer).",
          ),
        ],
      },
      {
        kicker: "Research Question",
        heading:
          "How might we ensure our learning platform is intuitive, encourages consistency, and makes users want to continue learning?",
        blocks: [
          lbl("Research goals:"),
          bullets([
            {
              text: "Identify tasks that the users can perform smoothly, and those they cannot",
            },
            {
              text: "Understand why users struggle with certain tasks (points of friction and/or confusion)",
            },
          ]),
        ],
      },
      {
        kicker: "Process",
        heading: "Process",
        blocks: [
          img("Process phases", undefined, "/e_learning/1_process_phases.png"),
          p(
            "My 5-stage research process for this project. For this case study, I'll be diving into the evaluative phase (usability testing).",
          ),
          sub("Phase 1: Identifying users"),
          p(
            "First, I identified who my user groups were going to be, by building directly off our platform's two target audience segmentations.",
          ),
          sub("Students", 5),
          bullets([
            { text: "Currently in their last year of college (20-21 years old)" },
            { text: "Attending tier 2 or 3 colleges" },
            { text: "Studying engineering, commerce, science, or arts" },
          ]),
          sub("Young professionals", 5),
          bullets([
            { text: "In their first two years of their career (21-23 years old)" },
            { text: "Attended tier 2 or 3 colleges" },
            {
              text: "Working in business development, sales, customer service, marketing, and other client-facing or cross-functional roles",
            },
          ]),
          sub("Guerilla Testing", 5),
          p(
            "I knew I didn't have resources to waste so I decided to design a \"trial run\" for myself. I created mock tasks, grabbed some laptops, and staked out cafes near colleges and offices where I thought target users would visit.",
          ),
          img(
            "Guerilla testing tasks",
            "The tasks I put forward to users in the guerilla usability test",
            "/e_learning/2_guerilla_testing_tasks.png",
          ),
          img(
            "Coffee shop testing setting",
            "CCD - A representative image of a coffee shop in which I conducted the guerilla testing",
            "/e_learning/3_coffee_shop_testing.png",
          ),
          callout(
            "challenge",
            "I struggled to convince people to participate in the study since resource constraints meant I couldn't provide monetary incentives. Ultimately, I tackled this by engaging with the larger group – making the usability study an event with social incentives. Treating participants' friends as an extension of the participant pool also provided a spectrum of insights!",
          ),
          sub("Phase 2: Moderated Usability Testing"),
          p(
            "Reflecting on and learning from my guerilla testing, I altered my tasks to remove vague terminology, add specificity, and keep them emotionally neutral.",
          ),
          img(
            "Final moderated usability testing",
            "Final moderated usability testing taking place in the office area",
            "/e_learning/4_final_mod_usability_test.png",
          ),
          sub("Measurements of Success", 5),
          bullets([
            { text: "Success rate of the task (1 for completing, 0 for not completing)" },
            { text: "Time the task required (in seconds)" },
            {
              text: "Satisfaction score (\"How would you rate your experience completing this task on a scale of 1-5?\" where 1 was very difficult and 5 was very easy)",
            },
          ]),
          p(
            "I included and emphasized on the satisfaction score because if the user found completing a task frustrating, they would view the experience negatively and be less likely to engage with the platform, even if they accomplished the tasks.",
          ),
          img(
            "Improved tasks for final usability test",
            "Learning from the guerilla testing experience, I improved the tasks for the final usability test",
            "/e_learning/5_improved_mod_usability%20tasks.png",
          ),
          callout(
            "learning",
            "Taking detailed notes was hindering my ability to moderate effectively so I established a workaround: videos. I recorded the participants so I could focus on moderation and, if something interesting happened, I noted the time stamp so I knew exactly where in the video to go back to.",
          ),
        ],
      },
      {
        kicker: "Insights",
        heading: "Key insights and recommendations",
        blocks: [
          p(
            "Using the measurements of success to analyze the usability tests, I identified two key insights and proposed a recommendation to address each.",
          ),
          sub("Insight 1"),
          sub("Observation", 5),
          p(
            "When users were stuck or had a question about the content, they didn't access the \"help\" feature. Instead, they stayed on the content tab and posted their questions in the \"forum\" section. They would keep checking for a response",
          ),
          sub("Insight", 5),
          p(
            "Users struggled to identify where to go when they had questions, preferring to not move away from the content. They got frustrated when they didn't get prompt answers",
          ),
          sub("Recommendation", 5),
          p(
            "Make the \"help\" feature more accessible: integrate it into the content page, next to the \"forum\" feature. This ensures users ask the right people and get a timely response",
          ),
          img("Visual representation of insight 1", undefined, "/e_learning/6_visual_rep_of_insight_1.png"),
          p(
            "I found this insight particularly interesting. Seeing users leverage the discussion forum as a proxy for the help feature highlighted the users' default behavior to go to peers instead of those in \"academic authority\" when they have questions: a behavior that seemed to have a heavy cultural influence.",
          ),
          sub("Insight 2"),
          sub("Observation", 5),
          p(
            "Some users, mainly those identifying as female, looked visibly taken aback when the platform first loaded. They also used words like \"manly\", \"dark\" and \"too game-like\" to describe the experience",
          ),
          sub("Insight", 5),
          p(
            "Some users found the platform's overall look and feel too masculine. The association with video games reduced the seriousness and hindered the experience.",
          ),
          sub("Recommendation", 5),
          p(
            "Since some users appreciated the current color scheme, add an option to toggle between this \"dark\" mode and another \"light\" mode",
          ),
          img(
            "Platform dashboard color scheme",
            "A screenshot of the platform dashboard to highlight the color scheme and 'gane-like' experience",
            "/e_learning/7_visual_rep_of_insight_2.png",
          ),
        ],
      },
      {
        kicker: "Buy-in",
        heading: "Getting buy-in from stakeholders",
        blocks: [
          p(
            "I knew that implementing these recommendations would cause us to re-work priorities and alter product timelines for the tech and design teams. Therefore, I presented them using my go-to strategies to get buy-in from not only team leaders, but also those actually executing the recommendations.",
          ),
          sub("Team, not just heads"),
          p(
            "Involve the developers and designers who are going to execute in the decision making process",
          ),
          sub("Videos to show, not just tell"),
          p("Use images, videos, or audio clips to show the users behind the insights"),
          sub("Common end goal"),
          p(
            "Establish the need for the recommendations in achieving the goal before presenting them",
          ),
        ],
      },
      {
        kicker: "Impact",
        heading: "Impact",
        blocks: [
          p(
            "Both of my recommendations were implemented – drastically improving user feedback in the short run and, in the long run along with other iterations, course completion rates:",
          ),
          bullets([
            { text: "NPS score jumped from <10% to 38%" },
            { text: "Course completion rates increased from ~5% (industry average) to 86%" },
          ]),
          img(
            "Implemented recommendations: help feature and light mode",
            "The implemented recommendations: (L) the new 'help' feature, accessible next to the often-accessed 'forum'. The feature is also titled to emphasise its purpose. (R) the 'light' mode that can be toggled on and off based on the individual user's preference",
            "/e_learning/8_implemented_recs.png",
          ),
        ],
      },
      {
        kicker: "Reflection",
        blocks: [
          sub("What I learnt"),
          bullets([
            {
              text: "Second time better. I'm always going to be doing something for the first time: how do I do it such that the second time is always better? Giving myself the space to try, fail, and learn from my pilot test made me more confident and improved the quality of my research.",
            },
          ]),
          sub("Next time…"),
          bullets([
            {
              text: "Leverage tools. My approach was scrappy given the lack of resources. Next time, I'd love to explore doing this process using tools like heatmaps and platforms like dscout or usertesting!",
            },
          ]),
        ],
      },
    ],
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
