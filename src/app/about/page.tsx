import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Hairline } from "@/components/Hairline";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mixed-methods UX researcher with 7 years of experience across fintech, insurance, and edtech, and a behavioral science background from UPenn.",
};

const experience = [
  {
    org: "FM Global ",
    role: "Senior UX Researcher",
    range: "2023 — Present",
    blurb: "Key researcher on $50M product, from zero-to-one strategy through post-launch iteration",
  },
  {
    org: "Coinbase",
    role: "UX Research, intern",
    range: "2022",
    blurb: "Lead researcher for Retail Advanced Trade",
  },
  {
    org: "X Billion Skills Lab",
    role: "User Experience Architect",
    range: "2018 — 2021",
    blurb: "Founding member of B2B EdTech startup, responsible for engagement and growth",
  },
];

const education = [
  {
    school: "University of Pennsylvania",
    detail: "M.S., Behavioral and Decision Sciences",
  },
  {
    school: "St Xavier's College",
    detail: "B.S., Life Science",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-24">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3">
              <p className="font-mono text-kicker uppercase text-ink-soft">
                About
              </p>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h1 className="text-h1 font-semibold text-ink max-w-[18ch] sm:text-display-3 lg:text-display-2">
                Hi, I&rsquo;m Natasha.
              </h1>
              <p className="mt-8 text-lead text-ink max-w-[55ch]">
                I&rsquo;m a mixed-methods UX researcher with seven years of
                experience turning qualitative depth into the kind of evidence
                product teams actually trust.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Hairline />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4">
              <div
                aria-label="Photo of Natasha Oza (placeholder)"
                className="aspect-[4/5] w-full bg-[url(/headshot.jpeg)] bg-cover bg-center border border-hairline flex items-center justify-center"
              >
                <span className="font-mono text-kicker uppercase text-ink-soft ">
                  {/* <img src="/headshot.jpeg" /> */}
                </span>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6 flex flex-col gap-6 text-lead text-ink max-w-[55ch]">
              <p>
                I started in academic research and moved to product because I
                wanted my work to actually ship. Today I lead studies that
                inform decisions for millions of users, with a quiet preference
                for the projects that involve a real behavior change rather
                than a surface-level usability tweak.
              </p>
              <p>
                Before product, I trained in behavioral and decision sciences
                at UPenn — where I learned to be honest about what user data
                can and can&rsquo;t tell you, and how to design studies that
                hold up when stakeholders push.
              </p>
              <p>
                Outside research, I cook, run, and (recently) plan a wedding.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Hairline />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3">
              <p className="font-mono text-kicker uppercase text-ink-soft">
                How I work
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
              <p className="text-h2 font-medium text-ink leading-snug max-w-[28ch] sm:text-h1 sm:leading-tight">
                Outcomes lead. Methods follow. Stakeholders read your draft.
              </p>
              <p className="text-lead text-ink max-w-[60ch]">
                Two-sentence philosophy placeholder: TODO — replace with
                Natasha&rsquo;s voice. The draft I&rsquo;d propose is something
                like: &ldquo;I lead with the business outcome a study needs to
                affect, then choose the leanest method that can credibly
                deliver it. The point of research isn&rsquo;t a report — it&rsquo;s a
                decision the team is willing to act on.&rdquo;
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Hairline />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3">
              <p className="font-mono text-kicker uppercase text-ink-soft">
                Selected writing
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-3">
              <a
                href="#"
                className="group inline-flex flex-col gap-2"
                aria-disabled="true"
              >
                <span className="font-mono text-kicker uppercase text-ink-soft">
                  TODO · paper title
                </span>
                <span className="text-h2 font-medium text-ink group-hover:text-terracotta transition-colors">
                  UPenn paper — title and link to come.
                </span>
                <span className="text-small text-ink-soft">
                  Behavioral and Decision Sciences, University of Pennsylvania
                </span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Hairline />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3">
              <p className="font-mono text-kicker uppercase text-ink-soft">
                Experience
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 flex flex-col">
              {experience.map((item) => (
                <div
                  key={item.org}
                  className="grid grid-cols-12 gap-4 border-t border-hairline py-6 first:border-t-0 first:pt-0"
                >
                  <span className="col-span-12 sm:col-span-3 font-mono text-small uppercase tracking-wider text-ink-soft">
                    {item.range}
                  </span>
                  <div className="col-span-12 sm:col-span-9 flex flex-col gap-1">
                    <span className="text-lead font-medium text-ink">
                      {item.role}, {item.org}
                    </span>
                    <span className="text-body text-ink-soft max-w-[55ch]">
                      {item.blurb}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Hairline />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3">
              <p className="font-mono text-kicker uppercase text-ink-soft">
                Education
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 flex flex-col">
              {education.map((item) => (
                <div
                  key={item.school}
                  className="border-t border-hairline py-6 first:border-t-0 first:pt-0"
                >
                  <p className="text-lead font-medium text-ink">
                    {item.school}
                  </p>
                  <p className="text-small text-ink-soft">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Hairline />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3">
              <p className="font-mono text-kicker uppercase text-ink-soft">
                Next
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-h1 font-semibold text-ink max-w-[20ch] sm:text-display-3">
                See the work, or write me a note.
              </h2>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-10">
                <Link
                  href="/#work"
                  className="text-h2 font-medium text-terracotta underline-offset-4 hover:underline transition-colors"
                >
                  Selected work →
                </Link>
                <a
                  href="mailto:noza@upenn.edu"
                  className="text-h2 font-medium text-terracotta underline-offset-4 hover:underline transition-colors"
                >
                  noza@upenn.edu
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
