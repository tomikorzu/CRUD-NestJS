// middleware.ts
import { NextRequest, NextResponse as res } from "next/server";
import authMiddleware from "./modules/shared/middlewares/auth.middleware";

export function middleware(req: NextRequest) {
  const authResponse = authMiddleware(req);
  if (authResponse) return authResponse;

  return res.next();
}

export const config = {
  matcher: ["/login", "/dashboard/:path*"],
};
