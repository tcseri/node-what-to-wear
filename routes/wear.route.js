const express = require("express");
const router = express.Router();
const wearController = require("../controllers/wear.controller")

//TODO get wear for date
router.get("/", wearController.getWear)

router.post("/", wearController.addWear)

module.exports = router;