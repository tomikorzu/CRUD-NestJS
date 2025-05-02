import { NextRequest, NextResponse } from "next/server";

export default function authMiddleware(req: NextRequest) {
  const token =
    req.cookies.get("next-auth.session-token") ||
    req.cookies.get("__Secure-next-auth.session-token");

  const publicAuthPages = ["/login"];

  const pathname = req.nextUrl.pathname;

  const isAuthPage = publicAuthPages.includes(pathname);

  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}
