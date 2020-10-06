module.exports = function(req,res,next){
    if(req.cookies.userSenseGaming){
        console.log(req.cookies.userSenseGaming)
        req.session.user = req.cookies.userSenseGaming;
        res.locals.user = req.session.user  
        next()
    }else{
        next()
    }
}