"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Locale = "sv" | "en";
type LocaleHrefs = { sv: string; en: string };

const localeStorageKey = "pro-clinic-locale";

export function LanguageSwitcher({ locale, hrefs = { sv: "/", en: "/en/" } }: { locale: Locale; hrefs?: LocaleHrefs }) {
  const pathname = usePathname();

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(localeStorageKey);

    if (storedLocale === "sv" || storedLocale === "en") {
      const isEnglishPath = pathname.startsWith("/en");
      if (storedLocale === "en" && !isEnglishPath) {
        window.location.replace(hrefs.en);
      }
      if (storedLocale === "sv" && isEnglishPath) {
        window.location.replace(hrefs.sv);
      }
    }
  }, [hrefs.en, hrefs.sv, pathname]);

  function chooseLocale(nextLocale: Locale) {
    window.localStorage.setItem(localeStorageKey, nextLocale);
  }

  return (
    <div className="language-switcher" aria-label={locale === "sv" ? "Byt språk" : "Change language"}>
      <Link
        href={hrefs.sv}
        className={locale === "sv" ? "language-switcher__link language-switcher__link--active" : "language-switcher__link"}
        aria-current={locale === "sv" ? "page" : undefined}
        onClick={() => chooseLocale("sv")}
      >
        SV
      </Link>
      <span aria-hidden="true">/</span>
      <Link
        href={hrefs.en}
        className={locale === "en" ? "language-switcher__link language-switcher__link--active" : "language-switcher__link"}
        aria-current={locale === "en" ? "page" : undefined}
        onClick={() => chooseLocale("en")}
      >
        EN
      </Link>
    </div>
  );
}
