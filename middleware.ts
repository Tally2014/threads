import { clerkMiddleware } from "@clerk/nextjs/server";

// Define public routes
// An array of public routes that don't require authentication.
const publicRoutes = ["/api/webhook/clerk"];

// Define ignored routes
// An array of routes to be ignored by the authentication middleware.
const ignoredRoutes = ["/api/webhook/clerk"];

export default clerkMiddleware();

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
  };