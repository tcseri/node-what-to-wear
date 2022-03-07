import express from "express";
import * as wearController from "../controllers/wear.controller";

const router = express.Router();

router.get("/", wearController.getAllWears);

router.post("/", wearController.addWear)

router.get("/:date", wearController.getWearsForDate)

export const wearRouter = router;
