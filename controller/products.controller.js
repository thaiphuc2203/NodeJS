var Product= require("../models/products.models")
module.exports.index = async (req, res) => {
  let products = await Product.find();
  let page = parseInt(req.query.page) || 1;
  let perPage=3;
  let start=(page -1)*perPage;
  let end= page*perPage;
  res.render("products/index", {
    products: products.slice(start, end)
  });
};;
module.exports.search = async(req, res) => {
  let products = await Product.find();
  let q = req.query.q;
  let matcheUsers = products.filter(product => {
    return product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render("products/index", {
    products: matcheUsers
  });
};