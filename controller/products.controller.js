const db = require("../db");
var Product= require("../models/products.models")
module.exports.index = (req, res) => {
  // let page=parseInt(req.query.page) || 1;
  // let perPage=8;
  // let start=(page -1)*perPage;
  // let end= page*perPage;
  // res.render("products/index",{
  //     products:db.get('products').value().slice(start,end)
  // });
  var x= Product.find().then((a)=>{
    let y=a;
    return y;
  })
console.log(x)
  Product.find().then((products)=>{
    let page=parseInt(req.query.page) || 1;
    let perPage=4;
    let start=(page -1)*perPage;
    let end= page*perPage;
    res.render("products/index", {
      products: products.slice(start, end)
    });
  })
};
module.exports.search = (req, res) => {
  let products = db.get("products").value();
  let q = req.query.q;
  let matcheUsers = products.filter(product => {
    return product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render("products/index", {
    products: matcheUsers
  });
};