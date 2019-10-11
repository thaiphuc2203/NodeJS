const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const useRouter= require('./router/user.router')

const port = 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlenco
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));
app.get("/", (req, res) => res.render('index'));
app.use('/users',useRouter);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
