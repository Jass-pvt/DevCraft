
import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mongoSanitize from "express-mongo-sanitize";

import apiRoutes from "./routes";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler";
import { env } from "./config/env";

export function createApp(): Application {
  const app = express();

  app.set("trust proxy", 1);
  app.disable("x-powered-by");

  // Remove any accidental trailing slash from the configured frontend URL.
  const corsOrigin = env.corsOrigin.replace(/\/$/, "");

  app.use(
    cors({
      origin: corsOrigin,
      methods: ["GET", "POST", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

  app.use(express.json({ limit: "20kb" }));

  app.use(mongoSanitize());

  if (env.nodeEnv !== "test") {
    app.use(morgan(env.nodeEnv === "production" ? "combined" : "dev"));
  }

  app.use("/api", apiRoutes);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
