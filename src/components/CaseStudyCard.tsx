import Link from "next/link";
import type { CaseStudy } from "@/lib/work";
import { MetricBlock } from "./MetricBlock";

type CaseStudyCardProps = {
  study: CaseStudy;
  index: number;
};

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  const offsetClass = index % 2 === 0 ? "lg:translate-x-0" : "lg:translate-x-8";

  return (
    <Link
      href={`/work/${study.slug}`}
      className={`group block ${offsetClass}`}
    >
      <article className="relative flex flex-col gap-6 border border-hairline bg-cream-soft p-8 transition-colors hover:bg-cream sm:p-10">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-kicker uppercase text-ink-soft">
            {study.kicker}
          </span>
          {study.gated && (
            <span className="font-mono text-kicker uppercase text-ink-soft border border-hairline px-2 py-0.5">
              NDA
            </span>
          )}
        </div>

        {study.metric && (
          <MetricBlock
            from={study.metric.from}
            to={study.metric.to}
            suffix={study.metric.suffix}
            label={study.metric.label}
          />
        )}

        <p
          aria-hidden="true"
          className="font-mono text-small text-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <span className="text-terracotta">→ </span>
          {study.outcome}
        </p>

        <h3 className="text-h2 font-semibold text-ink leading-snug sm:text-h1 sm:leading-tight">
          {study.title}
        </h3>

        <div className="mt-2 flex items-center justify-between gap-4 text-small text-ink-soft">
          <span className="font-mono uppercase tracking-wider">
            {study.role} · {study.year}
          </span>
          <span
            aria-hidden="true"
            className="text-terracotta transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </div>

        <span className="sr-only">Outcome: {study.outcome}</span>
      </article>
    </Link>
  );
}
