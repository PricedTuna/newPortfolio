import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from "./lang/en.json";
import esJson from "./lang/es.json";

// The NestedKeys type alias constructs a union type of all possible
// keys at the last level in a nested object type T, including the path to that key.
type NestedKeys<T> = T extends object
  ? {
      [K in Extract<keyof T, string>]: T[K] extends object
        ? `${K}.${NestedKeys<T[K]>}`
        : `${K}`;
    }[Extract<keyof T, string>]
  : never;

export type LanguageLastKeys = NestedKeys<typeof LANGUAGE.translation>;
type RequiredLanguageValues = typeof enJson;

const en: RequiredLanguageValues = enJson;
const es: RequiredLanguageValues = esJson;

export const LANGUAGES = {
  en: "en",
  es: "es",
} as const;

export const resources = {
  [LANGUAGES.en]: {
    translation: en,
  },
  [LANGUAGES.es]: {
    translation: es,
  },
};

export const DEFAULT_LANGUAGE = LANGUAGES.es;
export const LANGUAGE = resources[DEFAULT_LANGUAGE];

export type LanguagesKeys = keyof typeof LANGUAGES;

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: LANGUAGES.es,
  lng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
