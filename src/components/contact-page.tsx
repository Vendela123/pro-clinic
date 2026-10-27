import Link from "next/link";
import { ArrowLeft, MessageCircle, Phone } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";

type Locale = "sv" | "en";

type ContactCard = {
  name: string;
  services: Record<Locale, string[]>;
  phone: string;
  sms: string;
};

const contactCards: ContactCard[] = [
  {
    name: "Christine",
    services: {
      sv: ["Hudvård", "Vaxning / Hårborttagning", "Fransar & bryn"],
      en: ["Skincare", "Waxing / Hair removal", "Lashes & brows"],
    },
    phone: "0733903071",
    sms: "0733903071",
  },
  {
    name: "Maria",
    services: {
      sv: ["Massage"],
      en: ["Massage"],
    },
    phone: "0737345232",
    sms: "0737345232",
  },
  {
    name: "Lotta",
    services: {
      sv: ["Fotvård", "Fransförlängning"],
      en: ["Foot care", "Lash extensions"],
    },
    phone: "0705888508",
    sms: "0705888508",
  },
];

const contactCopy = {
  sv: {
    back: "Tillbaka till behandlingar",
    eyebrow: "Kontakt",
    title: "Boka genom rätt behandlare.",
    text: "För tidsbokning kontaktar du personen som ansvarar för behandlingen du vill boka. Vi använder inte onlinebokning eller kontaktformulär.",
    introLabel: "Behandlingar:",
    phone: "Ring",
    sms: "Skicka SMS",
    phoneLabel: "Telefon",
    smsLabel: "SMS",
  },
  en: {
    back: "Back to treatments",
    eyebrow: "Contact",
    title: "Book by contacting the right specialist.",
    text: "For appointments, contact the person responsible for your treatment. There is no online booking and no contact form.",
    introLabel: "Treatments:",
    phone: "Call",
    sms: "Send SMS",
    phoneLabel: "Phone",
    smsLabel: "SMS",
  },
} satisfies Record<Locale, Record<string, string>>;

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
              <Link className="text-link treatment-area-back" href={isSwedish ? "/#treatments" : "/en/#treatments"}>
                <ArrowLeft size={16} strokeWidth={1.6} />
                {content.back}
              </Link>
              <p className="eyebrow">{content.eyebrow}</p>
              <h1>{content.title}</h1>
              <p>{content.text}</p>
            </div>
            <div className="contact-person-grid">
              {contactCards.map((card) => (
                <article className="contact-person-card" key={card.name}>
                  <h2>{card.name}</h2>
                  <p className="contact-person-card__services">
                    <span>{content.introLabel}</span> {card.services[locale].join(" · ")}
                  </p>
                  <div className="contact-person-card__actions">
                    <a className="button button--dark button--small" href={`tel:${card.phone}`}>
                      <Phone size={16} strokeWidth={1.7} />
                      {content.phone}
                    </a>
                    <a className="button button--outline button--small" href={`sms:${card.sms}`}>
                      <MessageCircle size={16} strokeWidth={1.7} />
                      {content.sms}
                    </a>
                  </div>
                  <dl className="contact-person-card__details">
                    <div>
                      <dt>{content.phoneLabel}</dt>
                      <dd>{card.phone}</dd>
                    </div>
                    <div>
                      <dt>{content.smsLabel}</dt>
                      <dd>{card.sms}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
