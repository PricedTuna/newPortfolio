import { useTranslation } from "react-i18next";
import { LanguageLastKeys } from "../language/i18n";

export function useTranslate() {
  const {t} = useTranslation()

  const getTranslation = (key: LanguageLastKeys) => {
    return t(key);
  }

  return {getTranslation}
}