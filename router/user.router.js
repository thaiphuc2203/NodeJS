var multer = require("multer");

const express = require("express");
const router = express.Router();
const validate= require('../validate/user.validate')

const controller= require('../controller/user.controller')
const authMiddleware = require("../middleware/auth.middleware")
var upload = multer({ dest: "./public/uploads" });

router.get("/", authMiddleware.requireAuth, controller.index);
router.get("/cookie", (req, res)=>{
    res.cookie('user', 12345);
    res.send('hello')
})
router.get("/search",controller.search);
router.get("/create", controller.create);
router.get("/:id",controller.get);
router.post(
  "/create",
  upload.single("avatar"),
  validate.postCreate,
  controller.postCreate
);
module.exports= router