import { routing } from "@/i18n/routing";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // Use the routing configuration from your i18n setup
  ...routing,

  // Explicitly specify locales and default locale for clarity
  locales: ["en", "fr"],
  defaultLocale: "en",
});

export const config = {
  // Combined matcher that excludes:
  // - API routes, Next.js internals, Vercel specific paths
  // - Any paths containing dots (e.g., files with extensions)
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
