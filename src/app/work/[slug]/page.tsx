import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/CaseStudyView";
import { PasswordGate } from "@/components/PasswordGate";
import { getAdjacentCaseStudies, getCaseStudy, work } from "@/lib/work";
import { isFmGlobalUnlocked } from "./actions";

export function generateStaticParams() {
  return work.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.outcome,
  };
}

export default async function CaseStudyPage(
  props: PageProps<"/work/[slug]">,
) {
  const { slug } = await props.params;
  const search = await props.searchParams;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  if (study.gated) {
    const unlocked = await isFmGlobalUnlocked();
    if (!unlocked) {
      return <PasswordGate hasError={search?.error === "invalid"} />;
    }
  }

  const { prev, next } = getAdjacentCaseStudies(slug);
  return <CaseStudyView study={study} prev={prev} next={next} />;
}
