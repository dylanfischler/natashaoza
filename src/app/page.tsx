import Link from "next/link";
import { Container } from "@/components/Container";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Hairline } from "@/components/Hairline";
import { work } from "@/lib/work";

export default function Home() {
  return (
    <>
      <section className="pt-12 pb-24 sm:pt-16 sm:pb-32">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 bg-saffron px-8 py-14 sm:px-14 sm:py-20 lg:col-span-10 lg:col-start-1">
              <p className="font-mono text-kicker uppercase text-ink mb-8">
                UX research · Mixed methods · Behavioral science
              </p>
              <h1 className="text-h1 font-semibold text-ink max-w-[18ch] sm:text-display-3 lg:text-display-2 xl:text-display-1">
                I turn complex user behavior into product decisions that stick.
              </h1>
              <p className="mt-8 text-lead text-ink max-w-[55ch]">
                Seven years across fintech, insurance, and edtech, with a
                behavioral science lens from UPenn.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="work"
        className="scroll-mt-24 py-20 sm:py-28"
      >
        <Container>
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-kicker uppercase text-ink-soft mb-4">
                Selected work
              </p>
              <h2 className="text-h1 font-semibold text-ink max-w-[20ch] sm:text-display-3">
                Four case studies. Outcomes first, methods on request.
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

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3">
              <p className="font-mono text-kicker uppercase text-ink-soft">
                About
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <p className="text-h2 font-medium text-ink leading-snug sm:text-h1 sm:leading-tight">
                I work where research meets product. I&rsquo;ve embedded with
                designers, engineers, and PMs at companies that ship to
                millions, translating qualitative depth into the kind of
                evidence teams actually trust.
              </p>
              <Link
                href="/about"
                className="mt-10 inline-flex items-center gap-2 font-mono text-small uppercase tracking-wider text-ink underline underline-offset-4 decoration-hairline hover:decoration-terracotta hover:text-terracotta transition-colors"
              >
                Read more about me
                <span aria-hidden="true">→</span>
              </Link>
            </div>
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
                Have a research problem worth chewing on?
              </h2>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-10">
                <a
                  href="mailto:noza@upenn.edu"
                  className="text-h2 font-medium text-terracotta underline-offset-4 hover:underline transition-colors"
                >
                  noza@upenn.edu
                </a>
                <a
                  href="https://www.linkedin.com/in/natashaoza/"
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
