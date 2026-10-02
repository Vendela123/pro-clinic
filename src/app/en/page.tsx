import type { Metadata } from "next";
import { PublicHomepage } from "@/components/public-homepage";

export const metadata: Metadata = {
  title: "Pro Clinic | Beauty and wellness salon",
  description: "A warm and professional public website foundation for Pro Clinic.",
  alternates: {
    canonical: "/en/",
    languages: {
      "sv-SE": "/",
      en: "/en/",
    },
  },
};

export default function EnglishHomePage() {
  return <PublicHomepage locale="en" />;
}
