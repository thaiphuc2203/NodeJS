const express = require("express");
const router = express.Router();

const controller = require("../controller/auth.controller");
const authMiddleware= require("../middleware/auth.middleware")

router.get("/login", controller.login)
router.post("/login", controller.postLogin)
module.exports = router;
