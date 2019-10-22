var Product = require("../../models/products.models");
module.exports.index = async (req, res) => {
  let products = await Product.find();
  res.json(products)
};
