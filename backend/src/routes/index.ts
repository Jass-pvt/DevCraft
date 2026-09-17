import { Router } from "express";
import contactRoutes from "./contact.routes";

const router = Router();

router.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

router.use("/contact", contactRoutes);

export default router;
