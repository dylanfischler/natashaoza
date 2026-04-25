import Link from "next/link";
import type { CaseStudy } from "@/lib/work";
import { Container } from "./Container";
import { Hairline } from "./Hairline";
import { MetricBlock } from "./MetricBlock";

type CaseStudyViewProps = {
  study: CaseStudy;
  prev?: CaseStudy;
  next?: CaseStudy;
};

export function CaseStudyView({ study, prev, next }: CaseStudyViewProps) {
  return (
    <>
      <section className="pt-12 pb-20 sm:pt-16 sm:pb-28">
        <Container>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-kicker uppercase text-ink-soft hover:text-terracotta transition-colors"
          >
            <span aria-hidden="true">←</span> All work
          </Link>

          <p className="mt-12 font-mono text-kicker uppercase text-ink-soft">
            {study.kicker}
          </p>

          <h1 className="mt-6 text-h1 font-semibold text-ink max-w-[22ch] sm:text-display-3 lg:text-display-2">
            {study.title}
          </h1>

          <p className="mt-10 text-lead text-ink max-w-[60ch]">
            {study.summary}
          </p>

          <dl className="mt-16 grid grid-cols-2 gap-y-8 gap-x-6 sm:grid-cols-4">
            <MetaPair label="Role" value={study.role} />
            <MetaPair label="Year" value={study.year} />
            {study.team && <MetaPair label="Team" value={study.team} />}
            {study.methods && (
              <MetaPair label="Methods" value={study.methods.join(" · ")} />
            )}
          </dl>
        </Container>
      </section>

      {study.metric && (
        <>
          <Hairline />
          <section className="py-20 sm:py-24">
            <Container>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-3">
                  <p className="font-mono text-kicker uppercase text-ink-soft">
                    Outcome
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-8">
                  <MetricBlock
                    from={study.metric.from}
                    to={study.metric.to}
                    suffix={study.metric.suffix}
                    label={study.metric.label}
                  />
                </div>
              </div>
            </Container>
          </section>
        </>
      )}

      {study.body?.map((section, i) => (
        <div key={`${study.slug}-${i}`}>
          <Hairline />
          <section className="py-20 sm:py-24">
            <Container>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-3">
                  <p className="font-mono text-kicker uppercase text-ink-soft">
                    {section.kicker}
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
                  <h2 className="text-h2 font-semibold text-ink leading-snug max-w-[28ch] sm:text-h1 sm:leading-tight">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      className="text-lead text-ink max-w-[60ch]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        </div>
      ))}

      <Hairline />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {prev ? (
              <CaseLink direction="prev" study={prev} />
            ) : (
              <span aria-hidden="true" />
            )}
            {next ? (
              <CaseLink direction="next" study={next} />
            ) : (
              <span aria-hidden="true" />
            )}
          </div>
        </Container>
      </section>
    </>
  );
}

function MetaPair({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="font-mono text-kicker uppercase text-ink-soft">
        {label}
      </dt>
      <dd className="text-body text-ink">{value}</dd>
    </div>
  );
}

function CaseLink({
  direction,
  study,
}: {
  direction: "prev" | "next";
  study: CaseStudy;
}) {
  const isNext = direction === "next";
  return (
    <Link
      href={`/work/${study.slug}`}
      className={`group flex flex-col gap-3 border border-hairline p-8 hover:bg-cream-soft transition-colors ${
        isNext ? "sm:text-right" : ""
      }`}
    >
      <span className="font-mono text-kicker uppercase text-ink-soft">
        {isNext ? "Next case →" : "← Previous case"}
      </span>
      <span className="text-h2 font-semibold text-ink group-hover:text-terracotta transition-colors">
        {study.title}
      </span>
    </Link>
  );
}
