const express = require("express");
const router = express.Router();
const wearController = require("../controllers/wear.controller")

router.get("/", wearController.getWears)

router.post("/", wearController.addWear)