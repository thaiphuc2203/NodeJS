var db= require('../db')
const axios = require("axios");
module.exports.addToCart=(req, res)=>{
    let productId=req.params.productId;
    let sessionId= req.signedCookies.sessionId;
    if(!sessionId){
        res.redirect('/products')
        return;
    }
    let count = db
      .get("session")
      .find({ id: sessionId })
      .get("cart." + productId, 0)
      .value();
    db.get('session')
    .find({ id:sessionId })
    .set("cart."+ productId, count +1)
    .write();
    res.redirect("/products")
}
module.exports.index=(req, res)=>{
    let products;
     axios.get("http://localhost:3000/api/products").then(x => {
      products=x.data;
       res.render("cart/index", {
         products: products
       });
     });
     
    
}   