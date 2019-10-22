require("dotenv").config();


const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const useRouter= require('./router/user.router')
const authRouter = require("./router/auth.router")
const productsRouter = require("./router/products.router")
const cartRouter= require("./router/cart.router")
const apiProductsRouter=require("./api/router/products.router")
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const authMiddleware = require("./middleware/auth.middleware");
const sessionMiddleware= require('./middleware/session.middleware')

const port = 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlenco
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware)
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));
app.get("/",(req, res) => res.render("index"));
app.use('/users',authMiddleware.requireAuth, useRouter);
app.use('/auth', authRouter)
app.use('/products',productsRouter)
app.use('/cart', cartRouter)
app.use('/api', apiProductsRouter)
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
