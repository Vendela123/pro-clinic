import type { Metadata } from "next";
import { PublicHomepage } from "@/components/public-homepage";

export const metadata: Metadata = {
  title: "Pro Clinic | Skönhets- och wellnessalong",
  description: "Pro Clinic är en skönhets- och wellnessalong med personlig service och behandlingar.",
  alternates: {
    canonical: "/",
    languages: {
      "sv-SE": "/",
      en: "/en/",
    },
  },
};

export default function HomePage() {
  return <PublicHomepage locale="sv" />;
}
