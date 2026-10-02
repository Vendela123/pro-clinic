import Link from "next/link";
import { ArrowUpRight, ChevronDown, Mail, Menu, MessageCircle, Phone } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { TreatmentMenu } from "@/components/treatment-menu";

type Locale = "sv" | "en";

type Copy = {
  locale: Locale;
  navigation: {
    treatments: string;
    about: string;
    offers: string;
    contact: string;
    menu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
    visualLabel: string;
    visualNote: string;
  };
  treatmentSection: {
    eyebrow: string;
    title: string;
    text: string;
    cards: Array<{
      name: string;
      href: string;
      visualLabel: string;
    }>;
    cta: string;
  };
  whySection: {
    eyebrow: string;
    title: string;
    text: string;
    points: string[];
    visualLabel: string;
  };
  contactSection: {
    eyebrow: string;
    title: string;
    text: string;
    note: string;
    phone: string;
    sms: string;
    email: string;
    phoneValue: string;
    emailValue: string;
  };
  footer: {
    description: string;
    placeholder: string;
    copyright: string;
  };
};

const placeholderPhone = "tel:+46000000000";
const placeholderSms = "sms:+46000000000";
const placeholderEmail = "mailto:contact-placeholder@example.com";

const copy: Record<Locale, Copy> = {
  sv: {
    locale: "sv",
    navigation: {
      treatments: "Behandlingar",
      about: "Om oss / Team",
      offers: "Erbjudanden",
      contact: "Kontakt",
      menu: "Öppna meny",
    },
    hero: {
      eyebrow: "Skönhet och välbefinnande",
      title: "En lugnare väg till att känna dig som dig själv.",
      text: "Pro Clinic är en skönhets- och wellnessalong med utrymme för omsorg, återhämtning och personlig service.",
      primaryCta: "Upptäck behandlingar",
      secondaryCta: "Kontakta salongen",
      visualLabel: "Visuell placeholder",
      visualNote: "Godkänd salongsbild läggs till senare",
    },
    treatmentSection: {
      eyebrow: "Behandlingar",
      title: "Börja med det du behöver.",
      text: "Utforska våra behandlingsområden och hör av dig till salongen för mer information. Detaljerat innehåll publiceras när det är godkänt.",
      cards: [
        { name: "Hudvård", href: "/treatments/hudvard", visualLabel: "Bildplaceholder: Hudvård" },
        { name: "Massage", href: "/treatments/massage", visualLabel: "Bildplaceholder: Massage" },
        { name: "Fotvård", href: "/treatments/fotvard", visualLabel: "Bildplaceholder: Fotvård" },
        { name: "Fransar & bryn", href: "/treatments/fransar-bryn", visualLabel: "Bildplaceholder: Fransar & bryn" },
        { name: "Hårborttagning", href: "/treatments/harborttagning", visualLabel: "Bildplaceholder: Hårborttagning" },
      ],
      cta: "Se behandlingar",
    },
    whySection: {
      eyebrow: "Om Pro Clinic",
      title: "En varm och professionell upplevelse, i din takt.",
      text: "Här kommer Pro Clinics godkända berättelse, värderingar och information om teamet att ta plats. Tills dess visar vi en tydlig innehållsplaceholder.",
      points: ["[Värdegrund placeholder 01]", "[Värdegrund placeholder 02]", "[Värdegrund placeholder 03]"],
      visualLabel: "Bildplaceholder",
    },
    contactSection: {
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
    footer: {
      description: "Skönhets- och wellnessalong",
      placeholder: "[Adress och öppettider placeholder]",
      copyright: "© Pro Clinic",
    },
  },
  en: {
    locale: "en",
    navigation: {
      treatments: "Treatments",
      about: "About / Team",
      offers: "Offers",
      contact: "Contact",
      menu: "Open menu",
    },
    hero: {
      eyebrow: "Beauty and wellbeing",
      title: "A calmer way to feel like yourself.",
      text: "Pro Clinic is a beauty and wellness salon with space for care, recovery and personal service.",
      primaryCta: "Explore treatments",
      secondaryCta: "Contact the salon",
      visualLabel: "Visual placeholder",
      visualNote: "Approved salon image added later",
    },
    treatmentSection: {
      eyebrow: "Treatments",
      title: "Start with what you need.",
      text: "Explore our treatment areas and contact the salon for more information. Detailed content will be published when approved.",
      cards: [
        { name: "Skincare", href: "/en/treatments/hudvard", visualLabel: "Image placeholder: Skincare" },
        { name: "Massage", href: "/en/treatments/massage", visualLabel: "Image placeholder: Massage" },
        { name: "Foot care", href: "/en/treatments/fotvard", visualLabel: "Image placeholder: Foot care" },
        { name: "Lashes & brows", href: "/en/treatments/fransar-bryn", visualLabel: "Image placeholder: Lashes & brows" },
        { name: "Hair removal", href: "/en/treatments/harborttagning", visualLabel: "Image placeholder: Hair removal" },
      ],
      cta: "View treatments",
    },
    whySection: {
      eyebrow: "About Pro Clinic",
      title: "A warm and professional experience, at your pace.",
      text: "Pro Clinic's approved story, values and team information will live here. Until then, this space remains a clearly marked content placeholder.",
      points: ["[Values placeholder 01]", "[Values placeholder 02]", "[Values placeholder 03]"],
      visualLabel: "Image placeholder",
    },
    contactSection: {
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
    footer: {
      description: "Beauty and wellness salon",
      placeholder: "[Address and opening hours placeholder]",
      copyright: "© Pro Clinic",
    },
  },
};

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

export function PublicHomepage({ locale }: { locale: Locale }) {
  const content = copy[locale];
  const isSwedish = locale === "sv";

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner page-width">
          <Link className="brand" href={isSwedish ? "/" : "/en/"} aria-label="Pro Clinic">
            <span className="brand__mark">PC</span>
            <span className="brand__name">Pro Clinic</span>
          </Link>

          <nav className="desktop-nav" aria-label={isSwedish ? "Huvudnavigation" : "Main navigation"}>
            <TreatmentMenu locale={locale} />
            <a href="#about">{content.navigation.about}</a>
            <a href="#offers">{content.navigation.offers}</a>
            <a href="#contact">{content.navigation.contact}</a>
          </nav>

          <div className="site-header__actions">
            <LanguageSwitcher locale={locale} />
            <a className="button button--dark button--small header-cta" href="#contact">{content.navigation.contact}</a>
            <details className="mobile-menu">
              <summary aria-label={content.navigation.menu}><Menu size={22} strokeWidth={1.6} /></summary>
              <nav aria-label={content.navigation.menu}>
                <TreatmentMenu locale={locale} />
                <a href="#about">{content.navigation.about}</a>
                <a href="#offers">{content.navigation.offers}</a>
                <a href="#contact">{content.navigation.contact}</a>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main>
        <section className="hero page-width">
          <div className="hero__content">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            <p className="hero__text">{content.hero.text}</p>
            <div className="button-row">
              <a className="button button--dark" href="#treatments">{content.hero.primaryCta}<ArrowUpRight size={17} strokeWidth={1.7} /></a>
              <a className="button button--outline" href="#contact">{content.hero.secondaryCta}</a>
            </div>
            <div className="hero__footnote"><span className="hero__dot" />{isSwedish ? "En offentlig hemsida under uppbyggnad" : "A public website foundation in progress"}</div>
          </div>
          <div className="hero-visual visual-placeholder" role="img" aria-label={content.hero.visualLabel}>
            <div className="visual-placeholder__wash" />
            <div className="visual-placeholder__caption"><span>{content.hero.visualLabel}</span><small>{content.hero.visualNote}</small></div>
            <div className="visual-placeholder__stamp">PC / 01</div>
          </div>
        </section>

        <section className="intro-band">
          <div className="page-width intro-band__inner">
            <p>{isSwedish ? "En tydlig början för dig som vill hitta rätt behandling och rätt kontaktväg." : "A clear starting point for finding the right treatment and the right way to get in touch."}</p>
            <ChevronDown size={22} strokeWidth={1.4} />
          </div>
        </section>

        <section id="treatments" className="section page-width">
          <div className="section-heading section-heading--split">
            <div><p className="eyebrow">{content.treatmentSection.eyebrow}</p><h2>{content.treatmentSection.title}</h2></div>
            <p>{content.treatmentSection.text}</p>
          </div>
          <div className="treatment-grid">
            {content.treatmentSection.cards.map((card, index) => (
              <Link className="treatment-card" href={card.href} key={card.name}>
                <div className="treatment-card__visual visual-placeholder" aria-hidden="true"><span>{card.visualLabel}</span><strong>0{index + 1}</strong></div>
                <div className="treatment-card__body"><span className="card-index">0{index + 1}</span><h3>{card.name}</h3><p>{isSwedish ? "[Kort beskrivning placeholder]" : "[Short description placeholder]"}</p><span className="treatment-card__cta">{content.treatmentSection.cta}<ArrowUpRight size={16} strokeWidth={1.7} /></span></div>
              </Link>
            ))}
          </div>
        </section>

        <section id="about" className="section section--dark">
          <div className="page-width why-grid">
            <div className="why-visual visual-placeholder" role="img" aria-label={content.whySection.visualLabel}><div className="visual-placeholder__wash" /><span className="why-visual__label">{content.whySection.visualLabel}</span></div>
            <div className="why-content"><p className="eyebrow eyebrow--light">{content.whySection.eyebrow}</p><h2>{content.whySection.title}</h2><p className="why-content__text">{content.whySection.text}</p><div className="value-list">{content.whySection.points.map((point, index) => <div className="value-list__item" key={point}><span>0{index + 1}</span><strong>{point}</strong></div>)}</div><a className="text-link text-link--light" href="#contact">{content.navigation.contact}<ArrowUpRight size={17} strokeWidth={1.6} /></a></div>
          </div>
        </section>

        <section id="offers" className="section page-width offer-section">
          <div className="offer-section__copy"><p className="eyebrow">{content.navigation.offers}</p><h2>{isSwedish ? "En plats för nästa steg." : "A place for your next step."}</h2><p>{isSwedish ? "Aktuellt innehåll och erbjudanden publiceras här när Pro Clinics godkända information finns på plats." : "Current content and offers will appear here when Pro Clinic's approved information is ready."}</p></div>
          <div className="offer-placeholder visual-placeholder"><span>{isSwedish ? "Erbjudande placeholder" : "Offer placeholder"}</span><small>{isSwedish ? "Inget erbjudande publicerat ännu" : "No offer published yet"}</small></div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="page-width contact-grid">
            <div className="contact-section__intro"><p className="eyebrow">{content.contactSection.eyebrow}</p><h2>{content.contactSection.title}</h2><p>{content.contactSection.text}</p><small>{content.contactSection.note}</small></div>
            <div className="contact-links"><ContactLink href={placeholderPhone} icon={Phone} label={content.contactSection.phone} value={content.contactSection.phoneValue} /><ContactLink href={placeholderSms} icon={MessageCircle} label={content.contactSection.sms} value={content.contactSection.phoneValue} /><ContactLink href={placeholderEmail} icon={Mail} label={content.contactSection.email} value={content.contactSection.emailValue} /></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width site-footer__grid">
          <div><Link className="brand brand--footer" href={isSwedish ? "/" : "/en/"}><span className="brand__mark">PC</span><span className="brand__name">Pro Clinic</span></Link><p>{content.footer.description}</p><small>{content.footer.placeholder}</small></div>
          <div className="site-footer__links"><a href="#treatments">{content.navigation.treatments}</a><a href="#about">{content.navigation.about}</a><a href="#offers">{content.navigation.offers}</a><a href="#contact">{content.navigation.contact}</a></div>
          <div className="site-footer__contact"><LanguageSwitcher locale={locale} /><a href="#contact">{content.navigation.contact}<ArrowUpRight size={16} strokeWidth={1.6} /></a></div>
        </div>
        <div className="page-width site-footer__bottom"><span>{content.footer.copyright}</span><span>{isSwedish ? "Innehållsplaceholderer används tills vidare" : "Content placeholders are in use for now"}</span></div>
      </footer>
    </div>
  );
}
