import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";

type Locale = "sv" | "en";

const contactCopy = {
  sv: {
    back: "Tillbaka till behandlingar",
    eyebrow: "Kontakt",
    title: "Boka genom att prata med oss.",
    text: "För frågor och tidsbokning, kontakta salongen direkt via telefon, SMS eller e-post. Ingen onlinebokning eller kontaktformulär används här.",
    note: "Kontaktuppgifter är placeholders tills salongen har lämnat godkända uppgifter.",
    phone: "Telefon",
    sms: "SMS",
    email: "E-post",
    phoneValue: "[Telefonnummer placeholder]",
    emailValue: "[E-postadress placeholder]",
  },
  en: {
    back: "Back to treatments",
    eyebrow: "Contact",
    title: "Arrange an appointment by speaking with us.",
    text: "For questions and appointments, contact the salon directly by phone, SMS or email. There is no online booking or contact form here.",
    note: "Contact details are placeholders until approved details are supplied by the salon.",
    phone: "Phone",
    sms: "SMS",
    email: "Email",
    phoneValue: "[Phone number placeholder]",
    emailValue: "[Email address placeholder]",
  },
} satisfies Record<Locale, Record<string, string>>;

const placeholderPhone = "tel:+46000000000";
const placeholderSms = "sms:+46000000000";
const placeholderEmail = "mailto:contact-placeholder@example.com";

function ContactLink({ href, icon: Icon, label, value }: { href: string; icon: typeof Phone; label: string; value: string }) {
  return (
    <a className="contact-link" href={href}>
      <span className="contact-link__icon"><Icon size={18} strokeWidth={1.6} /></span>
      <span>
        <span className="contact-link__label">{label}</span>
        <span className="contact-link__value">{value}</span>
      </span>
      <ArrowUpRight className="contact-link__arrow" size={18} strokeWidth={1.6} />
    </a>
  );
}

export function ContactPage({ locale }: { locale: Locale }) {
  const content = contactCopy[locale];
  const isSwedish = locale === "sv";

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner page-width">
          <Link className="brand" href={isSwedish ? "/" : "/en/"} aria-label="Pro Clinic">
            <span className="brand__mark">PC</span>
            <span className="brand__name">Pro Clinic</span>
          </Link>
          <LanguageSwitcher locale={locale} hrefs={{ sv: "/contact", en: "/en/contact" }} />
        </div>
      </header>
      <main>
        <section className="section contact-page-section">
          <div className="page-width contact-grid">
            <div className="contact-section__intro">
              <Link className="text-link treatment-area-back" href={isSwedish ? "/#treatments" : "/en/#treatments"}><ArrowLeft size={16} strokeWidth={1.6} />{content.back}</Link>
              <p className="eyebrow">{content.eyebrow}</p>
              <h1>{content.title}</h1>
              <p>{content.text}</p>
              <small>{content.note}</small>
            </div>
            <div className="contact-links">
              <ContactLink href={placeholderPhone} icon={Phone} label={content.phone} value={content.phoneValue} />
              <ContactLink href={placeholderSms} icon={MessageCircle} label={content.sms} value={content.phoneValue} />
              <ContactLink href={placeholderEmail} icon={Mail} label={content.email} value={content.emailValue} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
