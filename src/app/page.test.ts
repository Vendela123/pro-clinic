import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { treatmentAreaImages } from "../components/treatment-area-images";

describe("Pro Clinic homepage smoke test", () => {
  it("contains the core brand and main intent", () => {
    expect("Pro Clinic").toContain("Pro");
    expect("Behandlingar").toContain("Be");
  });

  it("does not include the removed homepage banner or treatment indexes", () => {
    const homepageSource = readFileSync(
      fileURLToPath(new URL("../components/public-homepage.tsx", import.meta.url)),
      "utf8",
    );

    expect(homepageSource).not.toContain("En tydlig början för dig som vill hitta rätt behandling och rätt kontaktväg.");
    expect(homepageSource).not.toContain("card-index");
  });

  it("uses a shared cover layout for treatment images without banner spacing", () => {
    const styles = readFileSync(
      fileURLToPath(new URL("./globals.css", import.meta.url)),
      "utf8",
    );

    expect(styles).toContain("#treatments.section { padding-top: 0; }");
    expect(styles).toContain(".treatment-card__image { display: block; width: 100%; height: 100%; object-fit: cover; }");
    expect(styles).not.toContain(".intro-band");
  });

  it("uses the layered hero composition without the eyebrow", () => {
    const homepageSource = readFileSync(
      fileURLToPath(new URL("../components/public-homepage.tsx", import.meta.url)),
      "utf8",
    );
    const styles = readFileSync(
      fileURLToPath(new URL("./globals.css", import.meta.url)),
      "utf8",
    );

    expect(homepageSource).not.toContain("content.hero.eyebrow");
    expect(styles).not.toContain("border-bottom: 1px solid color-mix(in srgb, var(--line) 72%, transparent);");
    expect(styles).toContain(".hero-visual::before");
    expect(styles).toContain(".hero-visual__image");
    expect(styles).toContain("object-fit: cover;");
  });

  it("uses localized booking CTA labels and scoped section spacing", () => {
    const homepageSource = readFileSync(
      fileURLToPath(new URL("../components/public-homepage.tsx", import.meta.url)),
      "utf8",
    );
    const styles = readFileSync(
      fileURLToPath(new URL("./globals.css", import.meta.url)),
      "utf8",
    );

    expect(homepageSource).toContain('headerCta: "Boka här"');
    expect(homepageSource).toContain('headerCta: "Book here"');
    expect(homepageSource).toContain("content.navigation.headerCta");
    expect(styles).toContain(".contact-person-card__services { margin-bottom: 28px; color: var(--muted); line-height: 1.7; }");
    expect(styles).toContain(".contact-person-card__actions { margin-bottom: 24px; }");
    expect(styles).toContain(".contact-person-card__actions .button + .button { margin-left: 12px; }");
    expect(styles).toContain(".contact-person-card__details { margin: 0; }");
    expect(styles).toContain(".offer-section__copy h2 { margin-bottom: 24px; }");
    expect(styles).toContain(".offer-section__copy > h2 + p { margin-bottom: 20px; }");
    expect(styles).toContain(".offer-section__copy .location-address { margin-bottom: 24px; }");
  });

  it("keeps contact staff sections readable and responsive", () => {
    const contactSource = readFileSync(
      fileURLToPath(new URL("../components/contact-page.tsx", import.meta.url)),
      "utf8",
    );
    const styles = readFileSync(
      fileURLToPath(new URL("./globals.css", import.meta.url)),
      "utf8",
    );

    expect(contactSource).toContain("className=\"contact-person-grid\"");
    expect(contactSource).toContain("className=\"contact-person-card\"");
    expect(contactSource).not.toContain("content.smsLabel");
    expect(contactSource).toContain("<dt>{content.phoneLabel}</dt>");
    expect(styles).toContain("grid-template-columns: minmax(0, 1fr) minmax(0, .92fr);");
    expect(styles).toContain(".contact-section__intro, .contact-person-grid { min-width: 0; }");
    expect(styles).toContain(".contact-person-card { min-width: 0; padding-bottom: 30px;");
    expect(styles).toContain(".contact-person-card:last-child { padding-bottom: 0; border-bottom: 0; }");
  });
});

describe("treatment area images", () => {
  const expectedImages = {
    hudvard: {
      src: "/images/ansiktsbehandling.jpg",
      svAlt: "Hudvårdsbehandling",
      enAlt: "Facial treatment",
    },
    massage: {
      src: "/images/massgae.jpg",
      svAlt: "Massagebehandling",
      enAlt: "Massage treatment",
    },
    fotvard: {
      src: "/images/fotvård.jpg",
      svAlt: "Fotvårdsbehandling",
      enAlt: "Foot care treatment",
    },
    "fransar-bryn": {
      src: "/images/fransförlänging.jpg",
      svAlt: "Behandling av fransar och bryn",
      enAlt: "Lashes and brows treatment",
    },
    harborttagning: {
      src: "/images/harborttagning.jpg",
      svAlt: "Hårborttagningsbehandling",
      enAlt: "Hair removal treatment",
    },
  } as const;

  it("maps each treatment area to the same image in both locales", () => {
    for (const slug of Object.keys(treatmentAreaImages) as Array<keyof typeof expectedImages>) {
      const image = treatmentAreaImages[slug];
      const expected = expectedImages[slug];
      expect(image.src).toBe(expected.src);
      expect(image.alt.sv).toBe(expected.svAlt);
      expect(image.alt.en).toBe(expected.enAlt);
    }
  });
});
