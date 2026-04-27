import Link from "next/link";
import { Container } from "@/components/Container";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Hairline } from "@/components/Hairline";
import { work } from "@/lib/work";

export default function Home() {
  return (
    <>
      <section className="pt-12 sm:pt-16">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div
                aria-label="Photo of Natasha Oza"
                className="roundded-full col-span-6 col-start-4 md:col-span-4 md:cofl-start-9 lg:col-start-1 lg:col-span-4 aspect-[5/5] w-full bg-[url(/headshot.jpeg)] bg-cover bg-center border border-hairline"
              />
            <div className="col-span-12 bg-saffron px-8 py-14 sm:px-14 sm:py-20 md:col-span-8 lg:col-span-8">
              <p className="font-mono text-kicker uppercase text-ink mb-8">
                UX research · Mixed methods · M.S. Behavioral science
              </p>
              <h1 className="text-h1 font-semibold text-ink max-w-[18ch] sm:text-display-3 lg:text-display-2 xl:text-display-1">
                I turn complex user behavior into product decisions that stick
              </h1>
              {/* <p className="mt-8 text-lead text-ink max-w-[55ch]">
                My research doesn't just inform design decisions; it changes product architecture, shifts engineering roadmaps, and transforms skeptical stakeholders into champions of user research.
              </p> */}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3">
              <p className="font-mono text-kicker uppercase text-ink-soft">
                About
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-6">
              <p className="text-h2 font-medium text-ink leading-snug sm:leading-tight">
                My research doesn't just inform design decisions; it changes product architecture, shifts engineering roadmaps, and transforms skeptical stakeholders into champions of user research.
              </p>
              <p className="text-h2 font-medium text-ink leading-snug sm:leading-tight">
                I’ve spent my career both executing in-depth research, and building the infrastructure that supports it. 
              </p>
              <p className="text-h2 font-medium text-ink leading-snug sm:leading-tight">
              I specialize in translating insights into audience-specific narratives that meet stakeholders where they are.
              </p>

              {/* <Link
                href="/about"
                className="mt-10 inline-flex items-center gap-2 font-mono text-small uppercase tracking-wider text-ink underline underline-offset-4 decoration-hairline hover:decoration-terracotta hover:text-terracotta transition-colors"
              >
                Read more about me
                <span aria-hidden="true">→</span>
              </Link> */}
            </div>
          </div>
        </Container>
      </section>

      <Hairline />

      <section
        id="work"
        className="scroll-mt-24 py-20 sm:py-28"
      >
        <Container>
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-h1 font-semibold text-ink max-w-[20ch] sm:text-display-3">
                Selected work
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
            {work.map((study, i) => (
              <CaseStudyCard key={study.slug} study={study} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <Hairline />

      <section
        id="contact"
        className="scroll-mt-24 py-20 sm:py-28"
      >
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3">
              <p className="font-mono text-kicker uppercase text-ink-soft">
                Contact
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-h1 font-semibold text-ink max-w-[18ch] sm:text-display-3">
                I’m always looking to collaborate on something new or grab a coffee!
              </h2>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-10">
                <a
                  href="mailto:natasha.oza96@gmail.com"
                  className="text-h2 font-medium text-terracotta underline-offset-4 hover:underline transition-colors"
                >
                  natasha.oza96@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/natasha-oza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-h2 font-medium text-terracotta underline-offset-4 hover:underline transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
