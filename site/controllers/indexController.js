const path = require("path")
//const dbProducts=require(path.join(__dirname, "..", "data", "dbProducts"))//

const db = require('../database/models')

module.exports={
    index:((req,res,next)=>{

        db.Products.findAll({
            where:{
                id_categoria : 5
            }
        })
        .then(producto =>{
            res.render('index',{
                productos:producto,
                title: "Sensegaming"
            })
        })
    }),
    teclados:((req,res,next)=>{

        db.Products.findAll({
            where:{
                id_categoria : 9
            }
        })
        .then(producto =>{
            res.render('products',{
                productos:producto,
                title: "Teclados"
            })
        })
    }),
    software:((req,res,next)=>{

        db.Products.findAll({
            where:{
                id_categoria : 4
            }
        })
        .then(producto =>{
            res.render('products',{
                productos:producto,
                title: "Software"
            })
        })
    }),
    notebook:((req,res,next)=>{

        db.Products.findAll({
            where:{
                id_categoria : 2
            }
        })
        .then(producto =>{
            res.render('products',{
                productos:producto,
                title: "Notebook"
            })
        })
    }),
    perifericos:((req,res,next)=>{

        db.Products.findAll({
            where:{
                id_categoria : 6
            }
        })
        .then(producto =>{
            res.render('products',{
                productos:producto,
                title: "Perifericos"
            })
        })
    }),
    impresoras:((req,res,next)=>{

        db.Products.findAll({
            where:{
                id_categoria : 10
            }
        })
        .then(producto =>{
            res.render('products',{
                productos:producto,
                title: "Impresoras"
            })
        })
    }),
    accesorios:((req,res,next)=>{

        db.Products.findAll({
            where:{
                id_categoria : 11
            }
        })
        .then(producto =>{
            res.render('products',{
                productos:producto,
                title: "Accesorios"
            })
        })
    }),
    monitores:((req,res,next)=>{

        db.Products.findAll({
            where:{
                id_categoria : 8
            }
        })
        .then(producto =>{
            res.render('products',{
                productos:producto,
                title: "Monitores"
            })
        })
    })
}