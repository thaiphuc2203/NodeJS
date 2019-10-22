const express = require("express");
const router = express.Router();

const controller = require("../controller/products.controller");

router.get("/products", controller.index);


module.exports = router;
