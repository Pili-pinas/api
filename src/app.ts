import { OpenAPIHono } from "@hono/zod-openapi";
import { registerRoutes } from "./routes/index.js";

const app = new OpenAPIHono();

registerRoutes(app);

app.doc("/doc", {
  openapi: "3.1.0",
  info: {
    title: "Pili Pinas API",
    version: "0.1.0",
  },
});

export default app;
