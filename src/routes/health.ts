import { createRoute, z } from "@hono/zod-openapi";
import type { OpenAPIHono } from "@hono/zod-openapi";

const route = createRoute({
  method: "get",
  path: "/health",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: z.object({
            status: z.string(),
          }),
        },
      },
      description: "Health check response",
    },
  },
});

export function registerHealthRoutes(app: OpenAPIHono) {
  app.openapi(route, (c) => {
    return c.json({ status: "ok" }, 200);
  });
}
