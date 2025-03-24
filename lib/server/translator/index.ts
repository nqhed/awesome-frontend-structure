// if (process.env.NODE_ENV !== "test") {
//   require("server-only");
// }

import { LOCALES } from "@/lib/constants";

const messageDictionaries = {
  [LOCALES.EN]: () =>
    import("./dictionaries/message/en.json").then((module) => module.default),
  [LOCALES.VI]: () =>
    import("./dictionaries/message/vi.json").then((module) => module.default),
};

export const getMessage = async (locale: LocaleType) =>
  messageDictionaries[locale]();
