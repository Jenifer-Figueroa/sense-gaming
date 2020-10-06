const path = require('path');
const fs = require('fs');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))

module.exports={
    profile:function(req,res){
        res.render('profile',{
            title:"Perfil de usuario",
            productos: dbProducts.filter(producto =>{
                return producto.category != "visited" && producto.category != "in-sale"
            })
            
        })
    },
    logout:function(req,res){
        req.session.destroy()
        if(req.cookies.userSenseGaming){
            res.cookie('userSenseGaming',' ',{maxAge:-1});
        }
        return res.redirect('/')
}}