const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');

const dbUsers = require(path.join(__dirname,'..','data','dbUsers'));

const db = require('../database/models')



module.exports ={
    register:((req,res,next)=>{
        res.render("register",{
           title:"REGISTRO"
        })
    }),

    processRegister:function(req,res){
        let errors = validationResult(req);
    
        if(errors.isEmpty()){

            db.Users.create({
                nombre: req.body.nombre.trim(),
                apellido: req.body.apellido.trim(),
                email: req.body.email.trim(),
                password:bcrypt.hashSync(req.body.pass,10),
                avatar: (req.files[0])?req.files[0].filename:"default.png",
                rol:"user"
            })
            .then(usuario =>{
                console.log(usuario)
                return res.redirect('/')
            })
            .catch(error =>{
                res.send(error)
            })
    
            
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

            db.Users.findOne({
                where:{
                    email: req.body.email
                }
            })
            .then(user =>{
                req.session.user = {
                    id: user.id,
                    nick: user.nombre + " " + user.apellido,
                    email: user.email,
                    avatar:user.avatar,
                    rol: user.rol
                }
                if(req.body.recordar){
                    res.cookie('userSenseGaming',req.session.user,{maxAge:1000*60*60})
                }
                res.locals.user = req.session.user
                res.redirect('/')
            })
            .catch(error =>{
                res.send(error)
            })

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
            usuarios: dbUsers
            
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