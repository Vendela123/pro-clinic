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
