import { Router } from "express";
import { registeruser } from "../controllers/uercontoller.js";

const router = Router();

router.post("/registeruser", registeruser);

export default router;
