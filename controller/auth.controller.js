const md5= require('md5')
const db = require("../db");
module.exports.login=(req, res)=>{
    res.render("auth/login")
}
module.exports.postLogin =(req, res)=>{
    let email= req.body.email
    let password = req.body.password
    let user= db.get('users').find({ email:email }).value();
    if(!user){
        res.render("auth/login",{
            errors:['user is not exist'],
            values:req.body
        });
        return;
    }
    let hashePassword = md5(password)
    if(user.password!== hashePassword){
         res.render("auth/login", {
           errors: ["Wrong password"],
           values: req.body
         });
         return;
    }
    res.cookie('userId', user.id, {
        signed:true
    })
    res.redirect("/users")
}