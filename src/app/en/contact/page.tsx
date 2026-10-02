import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";

export const metadata: Metadata = {
  title: "Pro Clinic | Contact",
  description: "Contact Pro Clinic directly by phone, SMS or email.",
  alternates: {
    canonical: "/en/contact",
    languages: {
      "sv-SE": "/contact",
      en: "/en/contact",
    },
  },
};

export default function EnglishContactRoute() {
  return <ContactPage locale="en" />;
}
