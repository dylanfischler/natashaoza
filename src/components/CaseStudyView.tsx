import Link from "next/link";
import type { CaseStudy, ContentBlock, Inline, ListItem } from "@/lib/work";
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

          {study.summary && (
            <p className="mt-10 text-lead text-ink max-w-[60ch]">
              {study.summary}
            </p>
          )}

          <dl className="mt-16 grid grid-cols-2 gap-y-8 gap-x-6 sm:grid-cols-4">
            <MetaPair label="Role" value={study.role} />
            {study.year && <MetaPair label="Year" value={study.year} />}
            {study.duration && <MetaPair label="Duration" value={study.duration} />}
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
                  {section.heading && (
                    <h2 className="text-h2 font-semibold text-ink leading-snug max-w-[28ch] sm:text-h1 sm:leading-tight">
                      {section.heading}
                    </h2>
                  )}
                  {section.blocks.map((block, idx) => (
                    <BodyBlock key={idx} block={block} />
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

function BodyBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-lead text-ink max-w-[60ch]">
          {block.parts ? renderInlines(block.parts) : block.text}
        </p>
      );

    case "subheading": {
      const isLevel5 = block.level === 5;
      return isLevel5 ? (
        <h4 className="mt-2 text-h2 font-medium text-ink leading-snug max-w-[40ch]">
          {block.text}
        </h4>
      ) : (
        <h3 className="mt-4 text-h2 font-semibold text-ink leading-snug max-w-[40ch] sm:text-h1 sm:leading-tight">
          {block.text}
        </h3>
      );
    }

    case "emphasis":
      return (
        <p className="text-h2 font-semibold text-ink leading-snug max-w-[40ch] sm:text-h1 sm:leading-tight">
          {block.text}
        </p>
      );

    case "italicLabel":
      return (
        <p className="font-mono text-kicker uppercase text-ink-soft tracking-wider">
          {block.text}
        </p>
      );

    case "bulletList":
      return (
        <ul className="text-lead text-ink max-w-[60ch] flex flex-col gap-3 list-disc pl-6 marker:text-terracotta">
          {block.items.map((item, i) => (
            <ListItemNode key={i} item={item} />
          ))}
        </ul>
      );

    case "numberedList":
      return (
        <ol className="text-lead text-ink max-w-[60ch] flex flex-col gap-3 list-decimal pl-6 marker:text-terracotta marker:font-mono">
          {block.items.map((item, i) => (
            <ListItemNode key={i} item={item} />
          ))}
        </ol>
      );

    case "callout": {
      const emoji = block.variant === "challenge" ? "⚒️" : "🚀";
      const label = block.variant === "challenge" ? "Challenge" : "Learning";
      return (
        <aside className="border-l-4 border-terracotta bg-cream-soft px-6 py-5 max-w-[60ch] flex flex-col gap-3">
          <p className="font-mono text-kicker uppercase text-terracotta tracking-wider">
            <span aria-hidden="true">{emoji} </span>
            {label}
          </p>
          <p className="text-body text-ink leading-relaxed">{block.text}</p>
        </aside>
      );
    }

    case "image":
      return (
        <figure className="flex flex-col gap-3">
          <div className="border border-dashed border-hairline bg-cream-soft flex items-center justify-center py-16 px-8 text-center">
            <span className="font-mono text-kicker uppercase text-ink-soft">
              [Image TODO: {block.placeholder}]
            </span>
          </div>
          {block.caption && (
            <figcaption className="text-small text-ink-soft italic max-w-[60ch]">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
  }
}

function ListItemNode({ item }: { item: ListItem }) {
  return (
    <li>
      {item.text}
      {item.sub && (
        <ul className="mt-2 ml-2 flex flex-col gap-2 list-[circle] pl-4 text-body marker:text-ink-soft">
          {item.sub.map((s, j) => (
            <li key={j}>{s}</li>
          ))}
        </ul>
      )}
    </li>
  );
}

function renderInlines(parts: Inline[]) {
  return parts.map((part, i) => {
    if (typeof part === "string") return <span key={i}>{part}</span>;
    return (
      <a
        key={i}
        href={part.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 hover:text-terracotta transition-colors"
      >
        {part.text}
      </a>
    );
  });
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
