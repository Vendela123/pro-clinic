"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Locale = "sv" | "en";

type TreatmentMenuItem = {
  label: string;
  href: string;
};

const treatmentMenuItems: Record<Locale, TreatmentMenuItem[]> = {
  sv: [
    { label: "Hudvård", href: "/treatments/hudvard" },
    { label: "Massage", href: "/treatments/massage" },
    { label: "Fotvård", href: "/treatments/fotvard" },
    { label: "Fransar & bryn", href: "/treatments/fransar-bryn" },
    { label: "Hårborttagning", href: "/treatments/harborttagning" },
  ],
  en: [
    { label: "Skincare", href: "/en/treatments/hudvard" },
    { label: "Massage", href: "/en/treatments/massage" },
    { label: "Foot care", href: "/en/treatments/fotvard" },
    { label: "Lashes & brows", href: "/en/treatments/fransar-bryn" },
    { label: "Hair removal", href: "/en/treatments/harborttagning" },
  ],
};

export function TreatmentMenu({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isSwedish = locale === "sv";
  const label = isSwedish ? "Behandlingar" : "Treatments";
  const menuLabel = isSwedish ? "Behandlingsområden" : "Treatment areas";

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
      }
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function closeWhenFocusLeaves(event: React.FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
  }

  return (
    <div
      className="treatment-menu"
      data-open={open}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={closeWhenFocusLeaves}
      ref={menuRef}
    >
      <button
        className="treatment-menu__trigger"
        type="button"
        aria-expanded={open}
        aria-controls={`${locale}-treatment-menu`}
        aria-haspopup="true"
        onClick={() => setOpen(true)}
      >
        {label}
        <ChevronDown size={14} strokeWidth={1.6} aria-hidden="true" />
      </button>
      <nav className="treatment-menu__panel" id={`${locale}-treatment-menu`} aria-label={menuLabel}>
        {treatmentMenuItems[locale].map((item) => (
          <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
