import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { STORAGES, LOCALES } from "../constants";

let initLg: string = LOCALES.EN;

const cacheLangKey = STORAGES.LOCAL.LANGUAGE;

const cacheLanguage =
  `${process.env.NODE_ENV}`.toLowerCase() === "test"
    ? null
    : localStorage.getItem(cacheLangKey);

if (cacheLanguage) {
  initLg = cacheLanguage;
}

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: initLg,
    fallbackLng: initLg,

    // debug: process.env.NODE_ENV === "development",

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      lookupLocalStorage: cacheLangKey,
      caches: ["localStorage"],
    },
  });

export default i18n;
