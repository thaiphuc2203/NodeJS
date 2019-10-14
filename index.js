require("dotenv").config();


const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const useRouter= require('./router/user.router')
const authRouter = require("./router/auth.router")
var cookieParser = require("cookie-parser");

const authMiddleware = require("./middleware/auth.middleware");

const port = 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlenco
app.use(cookieParser(process.env.SESSION_SECRET));
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));
app.get("/",(req, res) => res.render("index"));
app.use('/users',authMiddleware.requireAuth, useRouter);
app.use('/auth', authRouter)
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
