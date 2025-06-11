import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = [
  "/home",
  "/flashcard",
  "/premium",
  "/community",
  "/settings",
  "/admin",
];

const protectedPathRegexes = protectedPaths.map(
  (path) => new RegExp(`^${path}(/.*)?$`)
);

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const pathname = request.nextUrl.pathname;
  const isProtected = protectedPathRegexes.some((regex) =>
    regex.test(pathname)
  );
  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/home/:path*", "/flashcard/:path*", "/premium/:path*", "/community/:path*", "/settings/:path*", "/admin/:path*"],
};
