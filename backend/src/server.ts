import mongoose from "mongoose";
import { createApp } from "./app";
import { env } from "./config/env";
import { logger } from "./utils/logger";
import { testEmailConnection } from "./services/email.service";

async function start() {
  try {
    await mongoose.connect(env.databaseUrl, {
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 10,
    });

    logger.info("Connected to MongoDB");

    // Test email connection on startup
    await testEmailConnection();

    const app = createApp();

    app.listen(env.port, () => {
      logger.info(`DevCraft backend listening on port ${env.port}`);
    });
  } catch (err) {
    logger.error("Failed to start server", err);
    process.exit(1);
  }
}

start();