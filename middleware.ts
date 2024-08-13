import { clerkMiddleware } from "@clerk/nextjs/server";
import { createRouteLoader } from "next/dist/client/route-loader";

const protectedRoutes = createRouteLoader('/dashboard')

export default clerkMiddleware((auth) => {
  if (protectedRoutes) {
    auth().protect()
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
