import { test } from "@playwright/test";
import { createI18nFixture } from "playwright-i18next-fixture";
import { i18n as i18nDefault } from "i18next";
import i18nMessageEn from "../../public/locales/en/message.json" assert { type: "json" };
import i18nMessageVi from "../../public/locales/vi/message.json" assert { type: "json" };

export const i18nFixture = createI18nFixture({
  // i18n configuration options
  options: {
    lng: "en",
    debug: false,
    ns: ["message"],
    supportedLngs: ["en", "vi"],
    cleanCode: true,
    resources: {
      en: {
        message: i18nMessageEn,
      },
      vi: {
        message: i18nMessageVi,
      },
    },
  },
  // Fetch translations in every test or fetch once
  // Default: true
  cache: true,
  // Run as auto fixture to be available through all tests by getI18nInstance()
  // Default: true
  auto: true,
});

export const testWithTranslator = test
  .extend(i18nFixture)
  .extend<{ translatorFix: i18nDefault }>({
    translatorFix: async ({ i18n, locale }, use) => {
      switch (locale) {
        case "vi":
          i18n.changeLanguage("vi");
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          // eslint-disable-next-line react-hooks/rules-of-hooks
          await use(i18n);
          break;

        default:
          i18n.changeLanguage("en");
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          // eslint-disable-next-line react-hooks/rules-of-hooks
          await use(i18n);
          break;
      }
    },
  });
