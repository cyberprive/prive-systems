import { NextResponse, type NextRequest } from "next/server";

const SUPPORTED = ["en", "es"] as const;
type Locale = (typeof SUPPORTED)[number];
const DEFAULT_LOCALE: Locale = "en";

function detectLocale(request: NextRequest): Locale {
  const acceptLang = (request.headers.get("accept-language") || "").toLowerCase();
  for (const part of acceptLang.split(",")) {
    const tag = part.trim().split(";")[0];
    if (tag.startsWith("es")) return "es";
    if (tag.startsWith("en")) return "en";
  }
  return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const response = NextResponse.next();
  response.headers.set("x-pathname", pathname);

  const hasLocale = SUPPORTED.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return response;

  const locale = detectLocale(request);
  const target = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(new URL(target, request.url));
}

export const config = {
  matcher: [
    "/((?!_next|api|robots.txt|sitemap.xml|llms.txt|favicon.ico|.*\\.).*)",
  ],
};
