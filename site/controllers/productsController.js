const fs = require('fs')
const path = require("path")

const {validationResult} = require('express-validator');
const db = require('../database/models');

const { Sequelize } = require('../database/models');
const Op = Sequelize.Op;



module.exports= {
    listar:function(req,res){
        db.Products.findAll()
        .then(productos =>{
            res.render("products",{
                title:"NUESTOS PRODUCTOS",
                productos:productos
            })
        })
        
    },
    detalle:function(req,res){
        db.Products.findOne({
            where: {
                id :  req.params.id
            }
        })
        .then(producto=>{
            res.render("productDetail",{
                title:"DETALLE DEL PRODUCTO",
                producto:producto
            })
        })
          
    },
    search:function(req,res){
        let busqueda = req.query.search;
        db.Products.findAll({
            where: {
                
                nombre: {[Op.like]: `%${busqueda}%`}
            }
        })
        .then(productos => {
            res.render('products',{
                title: "Resultado de la busqueda",
                productos:productos
            })
        })
        .catch(error =>{
            res.send(error)
        })
    },
    agregar: function(req, res){
        db.Categories.findAll({
            order: [
                ['nombre' , 'ASC']
            ]
        })
        .then(categorias =>{
            res.render('productAdd',{
                title: 'PUBLICAR PRODUCTO',
                categorias : categorias
            })
        })
    },
    publicar: function(req, res,next){
        let errores = validationResult(req);
        if(errores.isEmpty()){

        db.Products.create({
            nombre: req.body.nombre,
            precio: Number(req.body.precio),
            descripcion: req.body.descripcion,
            imagen: req.files[0].filename,
            id_categoria :Number(req.body.categoria)
        })
        .then(product=>{
            console.log(product)
            return res.redirect('/products')
        })
     
    
    }else{
        db.Categories.findAll({
            order:[
                'nombre'
            ]
        })
        .then(categorias => {
            let oldCategoria;
            if(req.body.categoria){
                categorias.forEach(categoria => {
                    if(categoria.id == req.body.categoria){
                        oldCategoria = categoria.nombre
                    }
                });
            }
            res.render('productAdd', {
                title: "Agregar Producto",
                categorias: categorias,
                errors: errores.mapped(),
                old:req.body,
                oldCategoria:oldCategoria
            }) 
        })
    }
    },
    vista:function(req, res){
        db.Products.findAll()
        .then(productos =>{
            res.render('productVistaEdit',{
                title: "Mis productos",
                productos : productos
            })
        })
        
    },
    show:function(req, res){
        let productos =db.Products.findByPk(req.params.id) ;
        let categorias= db.Categories.findAll();
        Promise.all([productos,categorias])
        .then(([productos,categorias])=>{
            res.render('productShow',{
                title:"EDITAR PRODUCTO",
                producto:productos,
                categorias:categorias
            })
        })
        .catch(error =>{
            res.send(error)
        })
    },
    editar:function(req, res, next){ 
        db.Products.update({
            nombre: req.body.nombre,
            precio: Number(req.body.precio),
            descripcion: req.body.descripcion,
            imagen: (req.files[0])?req.files[0].filename: req.body.imagen,
            id_categoria :Number(req.body.categoria)
            },
            {
                where:{
                    id: req.params.id
                }
        })
        .then(producto=>{
            console.log(producto)
            return  res.redirect('/products/detalle/' + req.params.id)
        })
        .catch(error =>{
            res.send(error)
        })
    },
    eliminar:function(req, res){
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.redirect('/products/edit')
            })
            .catch(errores => {
                res.send(errores)
            })
    }
}
