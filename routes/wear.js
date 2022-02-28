const express = require("express");
const router = express.Router();
const wearController = require("../controllers/wear.controller")

//TODO get wear for date
router.get("/", wearController.getAllWears)

router.post("/", wearController.addWear)

router.get("/date"), wearController.

module.exports = router;