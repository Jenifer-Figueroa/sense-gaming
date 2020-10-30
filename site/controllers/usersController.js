const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');

const dbProducts = require(path.join(__dirname,'..','data','dbProducts'));
const dbUsers = require(path.join(__dirname,'..','data','dbUsers'));



module.exports ={
    register:((req,res,next)=>{
        res.render("register",{
           title:"REGISTRO"
        })
    }),

    processRegister:function(req,res){
        let errors = validationResult(req);
        let lastID = 0;
        if(dbUsers.length != 0){
            dbUsers.forEach(user => {
                if(user.id > lastID){
                    lastID = user.id
                }
            })
        }
        if(errors.isEmpty()){
            let newUser = {
                id: lastID + 1,
                nombre: req.body.nombre.trim(),
                apellido: req.body.apellido.trim(),
                email: req.body.email.trim(),
                avatar: (req.files[0])?req.files[0].filename:"default.png",
                password:bcrypt.hashSync(req.body.pass,10),
                rol:"user"
            }
            dbUsers.push(newUser);
            fs.writeFileSync(path.join(__dirname,'..','data','dbUsers.json'),JSON.stringify(dbUsers),'utf-8')
    
            return res.redirect('/')
        }else{
            res.render('register',{
                title:"Registro de Usuario",
                errors:errors.mapped(),
                old:req.body
            })
        }
       
    },
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
                res.cookie('userSenseGaming',req.session.user,{maxAge:1000*60*60})
            }
            
            res.redirect('/')
        }else{
            res.render('login',{
                title: "Ingresá a tu cuenta",
                errors:errors.mapped(),
                old:req.body
            })
        }
    },
    profile:function(req,res){
        res.render('profile',{
            title:"Perfil de usuario",
            usuarios : dbUsers
            
        })
    },
    profileEdit: function (req, res) {

        let newUser = {
            id: lastID + 1,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
        }
        dbUsers.push(newUser);
        fs.writeFileSync(path.join(__dirname,'..','data','dbUsers.json'),JSON.stringify(dbUsers),'utf-8')
        res.render('profile', {
            title: 'Perfil de Usuario'
            
        })
    },
    logout:function(req,res){
        req.session.destroy()
        if(req.cookies.userSenseGaming){
            res.cookie('userSenseGaming',' ',{maxAge:-1});
        }
        return res.redirect('/')
}
}