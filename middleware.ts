import { Lib } from "@/lib";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let headers = { "accept-language": "en;q=0.5" };
let languages = new Negotiator({ headers }).languages();
let locales = Object.values(Lib.CONSTANTS.LOCALES);
let defaultLocale = Lib.CONSTANTS.LOCALES.EN;

match(languages, locales, defaultLocale);

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/" || request.nextUrl.pathname === "") {
    request.nextUrl.pathname = defaultLocale;
    return NextResponse.redirect(request.nextUrl);
  }
}
