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
                title: "TECLADOS"
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
                title: "SOFTWARE"
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
                title: "NOTEBOOK"
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
                title: "PERIFERICOS"
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
                title: "IMPRESORAS"
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
                title: "ACCESORIOS"
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
                title: "MONITORES"
            })
        })
    })
}