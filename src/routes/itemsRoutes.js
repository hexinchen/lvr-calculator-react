const express = require("express");
const router = express.Router();
const { calculateLVR } = require("../controllers/lvrController");

router.post("/calculate-lvr", calculateLVR);

module.exports = router;
