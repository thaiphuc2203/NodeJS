const db= require('../db')
const shortid = require("shortid");
module.exports.index=  (req, res) =>
  res.render("users/index", {
    users: db.get("users").value()
  })
module.exports.search = (req, res) => {
  let users = db.get("users");
  let q = req.query.q;
  let matcheUsers = db.get("users").filter(user => {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render("/index", {
    users: matcheUsers
  });
};
module.exports.create = (req, res) => {
  res.render("users/create");
};
module.exports.get = (req, res) => {
  let id = req.params.id;
  var user = db
    .get("users")
    .find({ id: id })
    .value();
  res.render("users/view", {
    user: user
  });
};
module.exports.postCreate = (req, res) => {
  req.body.id = shortid.generate();
  db.get("users")
    .push(req.body)
    .write();
  res.redirect("/users");
};