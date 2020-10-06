const path = require('path');
const fs = require('fs');
const {validationResult} = require('express-validator');
const dbProducts = require(path.join(__dirname,'..','data','dbProducts'))
const dbUsers = require(path.join(__dirname,'..','data','dbUsers'))

module.exports={
    login:((req,res,next)=>{
        res.render("login",{
           title:"Ingresa tu cuenta"
        })
    }),

    processLogin:function(req,res){
        let errors = validationResult(req);
        if(errors.isEmpty()){
            dbUsers.forEach(user => {
                if(user.email == req.body.email){
                    req.session.user = {
                        id: user.id,
                        nick: user.nombre + " " + user.apellido,
                        email: user.email,
                        avatar:user.avatar
                    }
                }
            })
            if(req.body.recordar){
                res.cookie('userMercadoLiebre',req.session.user,{maxAge:1000*60*60})
            }
            
            res.redirect('/')
        }else{
            res.render('userLogin',{
                title: "Ingresá a tu cuenta",
                css:"index.css",
                errors:errors.mapped(),
                old:req.body
            })
        }
    },
    profile:function(req,res){
        res.render('userProfile',{
            title:"Perfil de usuario",
            css: "profile.css",
            productos: dbProducts.filter(producto =>{
                return producto.category != "visited" && producto.category != "in-sale"
            })
            
        })
    },
    logout:function(req,res){
        req.session.destroy()
        if(req.cookies.userMercadoLiebre){
            res.cookie('userMercadoLiebre',' ',{maxAge:-1});
        }
        return res.redirect('/')
}}