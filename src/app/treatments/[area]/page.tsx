import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { areaSlugs, getAreaContent, TreatmentAreaPage } from "@/components/treatment-area-page";

type Props = { params: Promise<{ area: string }> };

export function generateStaticParams() {
  return areaSlugs.map((area) => ({ area }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  if (!areaSlugs.includes(area as (typeof areaSlugs)[number])) notFound();
  const content = getAreaContent("sv", area as (typeof areaSlugs)[number]);

  return {
    title: `Pro Clinic | ${content.name}`,
    description: `${content.name} hos Pro Clinic. Godkänd behandlingsinformation publiceras här när den finns tillgänglig.`,
    alternates: {
      canonical: `/treatments/${area}`,
      languages: {
        "sv-SE": `/treatments/${area}`,
        en: `/en/treatments/${area}`,
      },
    },
  };
}

export default async function TreatmentAreaRoute({ params }: Props) {
  const { area } = await params;
  if (!areaSlugs.includes(area as (typeof areaSlugs)[number])) notFound();
  return <TreatmentAreaPage locale="sv" slug={area as (typeof areaSlugs)[number]} />;
}
