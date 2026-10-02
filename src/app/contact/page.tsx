import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";

export const metadata: Metadata = {
  title: "Pro Clinic | Kontakt",
  description: "Kontakta Pro Clinic direkt via telefon, SMS eller e-post.",
  alternates: {
    canonical: "/contact",
    languages: {
      "sv-SE": "/contact",
      en: "/en/contact",
    },
  },
};

export default function ContactRoute() {
  return <ContactPage locale="sv" />;
}
