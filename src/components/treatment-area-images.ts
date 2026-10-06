export type TreatmentAreaSlug = "hudvard" | "massage" | "fotvard" | "fransar-bryn" | "harborttagning";

export const treatmentAreaImages: Record<TreatmentAreaSlug, {
  src: string;
  alt: {
    sv: string;
    en: string;
  };
}> = {
  hudvard: {
    src: "/images/ansiktsbehandling.jpg",
    alt: { sv: "Hudvårdsbehandling", en: "Facial treatment" },
  },
  massage: {
    src: "/images/massgae.jpg",
    alt: { sv: "Massagebehandling", en: "Massage treatment" },
  },
  fotvard: {
    src: "/images/fotvård.jpg",
    alt: { sv: "Fotvårdsbehandling", en: "Foot care treatment" },
  },
  "fransar-bryn": {
    src: "/images/fransförlänging.jpg",
    alt: { sv: "Behandling av fransar och bryn", en: "Lashes and brows treatment" },
  },
  harborttagning: {
    src: "/images/harborttagning.jpg",
    alt: { sv: "Hårborttagningsbehandling", en: "Hair removal treatment" },
  },
};
