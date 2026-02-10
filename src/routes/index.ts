import type { OpenAPIHono } from "@hono/zod-openapi";
import { registerHealthRoutes } from "./health.js";

export function registerRoutes(app: OpenAPIHono) {
  registerHealthRoutes(app);
}
