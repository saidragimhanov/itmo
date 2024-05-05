import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import translationEN from "./public/locales/en/translation.json";
import translationRU from "./public/locales/ru/translation.json";

i18n
  .use(initReactI18next)
  .use(I18NextHttpBackend)
  .use(LanguageDetector)
  .init({
    fallbackLng: "ru",
    debug: true,
    lng: "ru",
    resources: {
      en: {
        translation: translationEN,
      },
      ru: {
        translation: translationRU,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
