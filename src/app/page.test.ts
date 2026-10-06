import { describe, expect, it } from "vitest";
import { treatmentAreaImages } from "../components/treatment-area-images";

describe("Pro Clinic homepage smoke test", () => {
  it("contains the core brand and main intent", () => {
    expect("Pro Clinic").toContain("Pro");
    expect("Behandlingar").toContain("Be");
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
