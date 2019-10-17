const express = require("express");
const router = express.Router();

const controller = require("../controller/cart.controller");


router.get("/add/:productId", controller.addToCart);
router.get("/index", controller.index)

module.exports = router;
