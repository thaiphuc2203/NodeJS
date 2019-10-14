var db= require('../db')

module.exports.requireAuth=(req, res, next)=>{
    let id = req.signedCookies.userId;
    let user= db.get('users').find( {id:id} ).value();
    if (!req.signedCookies.userId) {
      res.redirect("/auth/login");
      return;
    }
    if(!user){
        res.redirect('/auth/login')
        return;
    }
    res.locals.user= user;
    next();
} 