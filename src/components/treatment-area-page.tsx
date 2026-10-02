import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";

type Locale = "sv" | "en";
type AreaSlug = "hudvard" | "massage" | "fotvard" | "fransar-bryn" | "harborttagning";

type Treatment = {
  name: string;
  duration?: string;
  price: string;
  description?: string;
};

type AreaContent = {
  name: string;
  eyebrow: string;
  title: string;
  back: string;
  cta: string;
  imageLabel: string;
  sectionTitle: string;
  treatments: Treatment[];
  note?: string;
  cancellationPolicy: string;
};

const swedishTreatments: Record<AreaSlug, Treatment[]> = {
  hudvard: [
    { name: "Klassisk Ansiktsbehandling med ånga", duration: "70 min", price: "1100 kr", description: "Efter rengöring av ansiktet görs en hudanalys. I behandlingen ingår peeling, ånga, porrengöring, avslappnade massage, mask, serum och dagkräm. I denna behandling ingår även plockning av bryn." },
    { name: "Klassisk Ansiktsbehandling med PHA syra", duration: "70 min", price: "1200 kr", description: "Som ovan men utan ånga. Istället används Exuviance PHA peeling. Den världspatenterade syran har stark positiv effekt på Acne, Rosacea, pigmentering samt rynkor." },
    { name: "Enbart Porrengöring", duration: "30 min", price: "550 kr", description: "Rengöring, ånga, portömning, ev.mask, serum och dagkräm." },
    { name: "Exuviance PHA syrabehandling", duration: "30 min", price: "700 kr", description: "Rengöring, PHA syra samt mask." },
  ],
  massage: [
    { name: "Klassisk Helkroppsmassage", duration: "60 min", price: "800 kr", description: "En djupgående massage där kunden i samråd med terapeut bestämmer om det finns något område som behöver behandlas extra mycket." },
    { name: "Halvkroppsmassage", duration: "30 min", price: "600 kr", description: "Kunden bestämmer själv vilket områdes som skall bearbetas och om behandlingen skall vara lugn och rogivande eller triggerpunkts baserad." },
    { name: "Bindvävsmassage", duration: "80 min", price: "900 kr", description: "Denna massageterapi hjälper till att lösa upp förtätad bindväv och ökar blodcirkulationen. Terapin innefattar en speciell teknik med töjningar av huden, koppar i olika storlekar används som komplement. Behandlingen avslutas med en klassisk massage." },
    { name: "Body Scrub inkl. Oljemassage", duration: "70 min", price: "900 kr", description: "Body scrub av persikokärnor görs på hela kroppen. Efter scrub och dusch oljas kroppen in med en behagligt doftande olja som lätt absorberas av huden." },
    { name: "Hand, Fot & Huvud", duration: "45 min", price: "600 kr", description: "Behandlingen avser massage av händer fötter och huvud/hårbotten. Det är en rogivande behandling där man masserar in rosenolja och mjukgörande kräm." },
  ],
  fotvard: [
    { name: "Medicinsk fotvård", duration: "ca. 60 min", price: "720 kr (pensionär – 670 kr)", description: "Behandlingen innehåller fotbad, klippning av tånaglar, behandling av nagelband, nagelplatta, rensning runt naglar och avlägsnande av förhårdnader. Eventuella åkommor avhjälps och hela behandlingen avslutas med en avslappnande fotmassage." },
    { name: "SPA-pedikyr", duration: "ca. 80 min", price: "945 kr", description: "Närmare känslan av ”att sväva på moln” kan man nog inte komma! Behandlingen börjar med ett avslappnande ört fotbad, fortsätter sedan med klipp och filande av naglar, behandling av nagelband samt nagelplatta, rensning runt naglar och avlägsnande av eventuella problem. Hela behandlingen avslutas med fotpeeling och en längre fotmassage. Lackning ingår om så önskas." },
    { name: "Lackning av tånaglar i samband med fotbehandling", price: "100 kr extra" },
    { name: "Fransförlängning", price: "från 1 350 kr" },
  ],
  "fransar-bryn": [
    { name: "Färgning av fransar & bryn inkl. plockning", price: "500 kr" },
    { name: "Färgning av fransar", price: "300 kr" },
    { name: "Färgning av bryn inkl. plockning", price: "300 kr" },
    { name: "Plockning av bryn", price: "200 kr" },
  ],
  harborttagning: [
    { name: "Vaxning av hela ben inkl. bikini", price: "650 kr" },
    { name: "Vaxning av halva ben inkl. bikini", price: "495 kr" },
    { name: "Vaxning av hela ben", price: "600 kr" },
    { name: "Vaxning av halva ben", price: "400 kr" },
    { name: "Vaxning av armar", price: "300 kr" },
    { name: "Vaxning av bikini", price: "från 300 kr" },
    { name: "Vaxning av armhåla", price: "250 kr" },
    { name: "Vaxning av haka och läpp", price: "från 300 kr" },
    { name: "Vaxning av enbart läpp", price: "180 kr" },
  ],
};

const cancellationPolicy = "Du kan avboka eller omboka din tid fram till 12 timmar före ditt besök. Uteblivet besök eller avbokning som sker mindre än 12 timmar före behandling debiteras med halva priset.";

const areas: Record<Locale, Record<AreaSlug, AreaContent>> = {
  sv: {
    hudvard: {
      name: "Hudvård",
      eyebrow: "Behandlingsområde",
      title: "Hudvård",
      back: "Tillbaka till behandlingar",
      cta: "Kontakta salongen",
      imageLabel: "Bildplaceholder: Hudvård",
      sectionTitle: "Ansiktsbehandling",
      treatments: swedishTreatments.hudvard,
      cancellationPolicy,
    },
    massage: {
      name: "Massage",
      eyebrow: "Behandlingsområde",
      title: "Massage",
      back: "Tillbaka till behandlingar",
      cta: "Kontakta salongen",
      imageLabel: "Bildplaceholder: Massage",
      sectionTitle: "Massage",
      treatments: swedishTreatments.massage,
      cancellationPolicy,
    },
    fotvard: {
      name: "Fotvård",
      eyebrow: "Behandlingsområde",
      title: "Fotvård",
      back: "Tillbaka till behandlingar",
      cta: "Kontakta salongen",
      imageLabel: "Bildplaceholder: Fotvård",
      sectionTitle: "Fotvård",
      treatments: swedishTreatments.fotvard,
      cancellationPolicy,
    },
    "fransar-bryn": {
      name: "Fransar & bryn",
      eyebrow: "Behandlingsområde",
      title: "Fransar & bryn",
      back: "Tillbaka till behandlingar",
      cta: "Kontakta salongen",
      imageLabel: "Bildplaceholder: Fransar & bryn",
      sectionTitle: "Färgning av fransar & bryn",
      treatments: swedishTreatments["fransar-bryn"],
      note: "Vid färgning av fransar & bryn i samband med annan behandling ges rabatt på färgningen.",
      cancellationPolicy,
    },
    harborttagning: {
      name: "Hårborttagning",
      eyebrow: "Behandlingsområde",
      title: "Hårborttagning",
      back: "Tillbaka till behandlingar",
      cta: "Kontakta salongen",
      imageLabel: "Bildplaceholder: Hårborttagning",
      sectionTitle: "Vaxning",
      treatments: swedishTreatments.harborttagning,
      cancellationPolicy,
    },
  },
  en: {
    hudvard: {
      name: "Skincare",
      eyebrow: "Treatment area",
      title: "Skincare",
      back: "Back to treatments",
      cta: "Contact the salon",
      imageLabel: "Image placeholder: Skincare",
      sectionTitle: "Facial treatment",
      treatments: swedishTreatments.hudvard,
      cancellationPolicy,
    },
    massage: {
      name: "Massage",
      eyebrow: "Treatment area",
      title: "Massage",
      back: "Back to treatments",
      cta: "Contact the salon",
      imageLabel: "Image placeholder: Massage",
      sectionTitle: "Massage",
      treatments: swedishTreatments.massage,
      cancellationPolicy,
    },
    fotvard: {
      name: "Foot care",
      eyebrow: "Treatment area",
      title: "Foot care",
      back: "Back to treatments",
      cta: "Contact the salon",
      imageLabel: "Image placeholder: Foot care",
      sectionTitle: "Foot care",
      treatments: swedishTreatments.fotvard,
      cancellationPolicy,
    },
    "fransar-bryn": {
      name: "Lashes & brows",
      eyebrow: "Treatment area",
      title: "Lashes & brows",
      back: "Back to treatments",
      cta: "Contact the salon",
      imageLabel: "Image placeholder: Lashes & brows",
      sectionTitle: "Lash & brow colouring",
      treatments: swedishTreatments["fransar-bryn"],
      cancellationPolicy,
    },
    harborttagning: {
      name: "Hair removal",
      eyebrow: "Treatment area",
      title: "Hair removal",
      back: "Back to treatments",
      cta: "Contact the salon",
      imageLabel: "Image placeholder: Hair removal",
      sectionTitle: "Waxing",
      treatments: swedishTreatments.harborttagning,
      cancellationPolicy,
    },
  },
};

export const areaSlugs: AreaSlug[] = ["hudvard", "massage", "fotvard", "fransar-bryn", "harborttagning"];

export function TreatmentAreaPage({ locale, slug }: { locale: Locale; slug: AreaSlug }) {
  const content = areas[locale][slug];
  const isSwedish = locale === "sv";
  const path = isSwedish ? `/treatments/${slug}` : `/en/treatments/${slug}`;
  const alternatePath = isSwedish ? `/en/treatments/${slug}` : `/treatments/${slug}`;

  return (
    <div className="site-shell treatment-area-page">
      <header className="site-header">
        <div className="site-header__inner page-width">
          <Link className="brand" href={isSwedish ? "/" : "/en/"} aria-label="Pro Clinic">
            <span className="brand__mark">PC</span>
            <span className="brand__name">Pro Clinic</span>
          </Link>
          <div className="site-header__actions">
            <LanguageSwitcher locale={locale} hrefs={{ sv: isSwedish ? path : alternatePath, en: isSwedish ? alternatePath : path }} />
            <Link className="button button--dark button--small" href={isSwedish ? "/contact" : "/en/contact"}>{content.cta}</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="treatment-area-hero page-width">
          <div className="treatment-area-hero__content">
            <Link className="text-link treatment-area-back" href={isSwedish ? "/#treatments" : "/en/#treatments"}>
              <ArrowLeft size={16} strokeWidth={1.6} />
              {content.back}
            </Link>
            <p className="eyebrow">{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <Link className="button button--dark" href={isSwedish ? "/contact" : "/en/contact"}>{content.cta}<ArrowUpRight size={17} strokeWidth={1.7} /></Link>
          </div>
          <div className="treatment-area-hero__visual visual-placeholder" role="img" aria-label={content.imageLabel}>
            <div className="visual-placeholder__wash" />
            <span className="treatment-area-hero__visual-label">{content.imageLabel}</span>
          </div>
        </section>

        <section className="section treatment-list-section">
          <div className="page-width">
            <p className="eyebrow">{content.sectionTitle}</p>
            <div className="treatment-list">
              {content.treatments.map((treatment) => (
                <article className="treatment-list__item" key={treatment.name}>
                  <div>
                    <h2>{treatment.name}</h2>
                    {treatment.duration && <p className="treatment-list__duration">{treatment.duration}</p>}
                    {treatment.description && <p className="treatment-list__description">{treatment.description}</p>}
                  </div>
                  <p className="treatment-list__price">{treatment.price}</p>
                </article>
              ))}
            </div>
            {content.note && <p className="treatment-area-note">{content.note}</p>}
            <div className="treatment-area-policy">
              <p className="eyebrow">{isSwedish ? "Avbokningspolicy" : "Cancellation policy"}</p>
              <p>{content.cancellationPolicy}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export function getAreaContent(locale: Locale, slug: AreaSlug) {
  return areas[locale][slug];
}
