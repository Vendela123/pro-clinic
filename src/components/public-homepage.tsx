import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { TreatmentMenu } from "@/components/treatment-menu";
import Image from "next/image";

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
      imageSrc?: string;
      imageAlt?: string;
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
  footer: {
    description: string;
    placeholder: string;
    copyright: string;
  };
};

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
      title: "Pro Clinic",
      text: "Pro Clinic är en skönhets- och wellnessalong med utrymme för omsorg, återhämtning och personlig service.",
      primaryCta: "Upptäck behandlingar",
      secondaryCta: "Kontakta salongen",
      visualLabel: "Visuell placeholder",
      visualNote: "Godkänd salongsbild läggs till senare",
    },
    treatmentSection: {
        eyebrow: "Behandlingar",
        title: "Ta hand om dig, på ditt sätt.",
        text: "Utforska våra behandlingar inom hudvård, massage, fotvård, fransar & bryn och hårborttagning. Hitta den behandling som passar dig och kontakta oss för mer information och tidsbokning.",
        cards: [
        { name: "Hudvård", href: "/treatments/hudvard", visualLabel: "Bildplaceholder: Hudvård", imageSrc: "/images/ansiktsbehandling.jpg", imageAlt: "Hudvårdsbehandling" },
        { name: "Massage", href: "/treatments/massage", visualLabel: "Bildplaceholder: Massage", imageSrc: "/images/massgae.jpg", imageAlt: "Massagebehandling" },
        { name: "Fotvård", href: "/treatments/fotvard", visualLabel: "Bildplaceholder: Fotvård", imageSrc: "/images/fotvård.jpg", imageAlt: "Fotvårdsbehandling" },
        { name: "Fransar & bryn", href: "/treatments/fransar-bryn", visualLabel: "Bildplaceholder: Fransar & bryn", imageSrc: "/images/bryn.jpg", imageAlt: "Behandling av fransar och bryn" },
        { name: "Hårborttagning", href: "/treatments/harborttagning", visualLabel: "Bildplaceholder: Hårborttagning", imageSrc: "/images/harborttagning.jpg", imageAlt: "Hårborttagningsbehandling" },
      ],
      cta: "Se behandlingar",
    },
             whySection: {
        eyebrow: "Om Pro Clinic",
        title: "Skönhet och välbefinnande med dig i fokus.",
        text: "På Pro Clinic möts du av ett personligt bemötande och behandlingar inom hudvård, massage, fotvård, fransar & bryn och hårborttagning. Här kan du ta hand om dig själv, koppla av och få den omsorg du behöver.",
        points: [
          "Personligt bemötande",
          "Skönhet och välbefinnande",
          "Omsorg med dig i fokus"
        ],
        visualLabel: "Pro Clinic"
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
        {
          name: "Skincare",
          href: "/en/treatments/hudvard",
          visualLabel: "Image placeholder: Skincare",
          imageSrc: "/images/ansiktsbehandling.jpg",
          imageAlt: "Facial treatment",
        },
        { name: "Massage",
          href: "/en/treatments/massage",
          visualLabel: "Image placeholder: Massage",
          imageSrc: "/images/massgae.jpg",
          imageAlt: "Massage treatment",
        },
        { name: "Foot care",
          href: "/en/treatments/fotvard",
          visualLabel: "Image placeholder: Foot care",
          imageSrc: "/images/fotvård.jpg",
          imageAlt: "Foot care treatment",
        },
        { name: "Lashes & brows",
           href: "/en/treatments/fransar-bryn",
           visualLabel: "Image placeholder: Lashes & brows",
           imageSrc: "/images/bryn.jpg",
           imageAlt: "Lashes and brows treatment"
             },
        { name: "Hair removal",
           href: "/en/treatments/harborttagning",
           visualLabel: "Image placeholder: Hair removal",
           imageSrc: "/images/harborttagning.jpg",
           imageAlt: "Hair removal treatment" },
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
    footer: {
      description: "Beauty and wellness salon",
      placeholder: "[Address and opening hours placeholder]",
      copyright: "© Pro Clinic",
    },
  },
};

export function PublicHomepage({ locale }: { locale: Locale }) {
  const content = copy[locale];
  const isSwedish = locale === "sv";
  const contactHref = isSwedish ? "/contact" : "/en/contact";

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
            <Link href={contactHref}>{content.navigation.contact}</Link>
          </nav>

          <div className="site-header__actions">
            <LanguageSwitcher locale={locale} />
            <Link className="button button--dark button--small header-cta" href={contactHref}>{content.navigation.contact}</Link>
            <details className="mobile-menu">
              <summary aria-label={content.navigation.menu}><Menu size={22} strokeWidth={1.6} /></summary>
              <nav aria-label={content.navigation.menu}>
                <TreatmentMenu locale={locale} />
                <a href="#about">{content.navigation.about}</a>
                <a href="#offers">{content.navigation.offers}</a>
                <Link href={contactHref}>{content.navigation.contact}</Link>
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
              <Link className="button button--outline" href={contactHref}>{content.hero.secondaryCta}</Link>
            </div>
            <div className="hero__footnote"><span className="hero__dot" />{isSwedish ? "En offentlig hemsida under uppbyggnad" : "A public website foundation in progress"}</div>
          </div>
         <div className="hero-visual">
            <Image
              className="hero-visual__image"
              src="/images/spa.jpg"
              alt="Pro Clinic"
              width={1000}
              height={1200}
              priority
            />
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
                <div className="treatment-card__visual">
                 {card.imageSrc ? (
                   <Image
                     className="treatment-card__image"
                     src={card.imageSrc}
                     alt={card.imageAlt ?? ""}
                     width={600}
                     height={660}
                     loading="eager"
                     unoptimized
                   />
                 ) : null}
               </div>
                <div className="treatment-card__body"><span className="card-index">0{index + 1}</span><h3>{card.name}</h3><span className="treatment-card__cta">{content.treatmentSection.cta}<ArrowUpRight size={16} strokeWidth={1.7} /></span></div>
              </Link>
            ))}
          </div>
        </section>

        <section id="about" className="section section--dark">
          <div className="page-width why-grid">
            <div className="why-visual visual-placeholder" role="img" aria-label={content.whySection.visualLabel}><div className="visual-placeholder__wash" /><span className="why-visual__label">{content.whySection.visualLabel}</span></div>
            <div className="why-content"><p className="eyebrow eyebrow--light">{content.whySection.eyebrow}</p><h2>{content.whySection.title}</h2><p className="why-content__text">{content.whySection.text}</p><div className="value-list">{content.whySection.points.map((point, index) => <div className="value-list__item" key={point}><span>0{index + 1}</span><strong>{point}</strong></div>)}</div><Link className="text-link text-link--light" href={contactHref}>{content.navigation.contact}<ArrowUpRight size={17} strokeWidth={1.6} /></Link></div>
          </div>
        </section>

        <section id="offers" className="section page-width offer-section">
          <div className="offer-section__copy"><p className="eyebrow">{content.navigation.offers}</p><h2>{isSwedish ? "En plats för nästa steg." : "A place for your next step."}</h2><p>{isSwedish ? "Aktuellt innehåll och erbjudanden publiceras här när Pro Clinics godkända information finns på plats." : "Current content and offers will appear here when Pro Clinic's approved information is ready."}</p></div>
          <div className="offer-placeholder visual-placeholder"><span>{isSwedish ? "Erbjudande placeholder" : "Offer placeholder"}</span><small>{isSwedish ? "Inget erbjudande publicerat ännu" : "No offer published yet"}</small></div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="page-width site-footer__grid">
          <div><Link className="brand brand--footer" href={isSwedish ? "/" : "/en/"}><span className="brand__mark">PC</span><span className="brand__name">Pro Clinic</span></Link><p>{content.footer.description}</p><small>{content.footer.placeholder}</small></div>
          <div className="site-footer__links"><a href="#treatments">{content.navigation.treatments}</a><a href="#about">{content.navigation.about}</a><a href="#offers">{content.navigation.offers}</a><Link href={contactHref}>{content.navigation.contact}</Link></div>
          <div className="site-footer__contact"><LanguageSwitcher locale={locale} /><Link href={contactHref}>{content.navigation.contact}<ArrowUpRight size={16} strokeWidth={1.6} /></Link></div>
        </div>
        <div className="page-width site-footer__bottom"><span>{content.footer.copyright}</span><span>{isSwedish ? "Innehållsplaceholderer används tills vidare" : "Content placeholders are in use for now"}</span></div>
      </footer>
    </div>
  );
}
