import { ref, computed } from "vue";
import { en } from "../locales/en";
import { el } from "../locales/el";

const STORAGE_KEY = "attlarp_lang";
const translations = { en, el };

// Default to English ('en') if not specified in URL or localStorage
const getInitialLocale = () => {
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get("lang");
    if (urlLang === "el" || urlLang === "en") {
      return urlLang;
    }
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "el" || saved === "en") {
      return saved;
    }
  }
  return "en";
};

export const currentLocale = ref(getInitialLocale());

if (typeof document !== "undefined") {
  document.documentElement.lang = currentLocale.value;
}

export const setLocale = (lang) => {
  if (lang !== "en" && lang !== "el") return;
  currentLocale.value = lang;
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, lang);
    const url = new URL(window.location.href);
    if (url.searchParams.get("lang") !== lang) {
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.toString());
    }
  }
  if (typeof document !== "undefined") {
    document.documentElement.lang = lang;
  }
};

export const toggleLocale = () => {
  setLocale(currentLocale.value === "en" ? "el" : "en");
};

export function useI18n() {
  const t = (path, fallback = "") => {
    const keys = path.split(".");
    let current = translations[currentLocale.value];

    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        // Fallback to English if key missing in Greek
        let enFallback = translations.en;
        for (const fKey of keys) {
          if (enFallback && typeof enFallback === "object" && fKey in enFallback) {
            enFallback = enFallback[fKey];
          } else {
            return fallback || path;
          }
        }
        return typeof enFallback === "string" ? enFallback : fallback || path;
      }
    }

    return typeof current === "string" ? current : fallback || path;
  };

  const isGreek = computed(() => currentLocale.value === "el");
  const isEnglish = computed(() => currentLocale.value === "en");

  return {
    locale: currentLocale,
    setLocale,
    toggleLocale,
    t,
    isGreek,
    isEnglish,
  };
}
