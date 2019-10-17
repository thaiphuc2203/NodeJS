const express = require("express");
const router = express.Router();

const controller = require("../controller/products.controller");


router.get("/", controller.index);
router.get("/search", controller.search);

module.exports = router;
