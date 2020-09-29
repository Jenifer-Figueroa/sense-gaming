module.exports={
    login:((req,res,next)=>{
        res.render("login",{
           title:"Ingresa tu cuenta"
        })
    })
}