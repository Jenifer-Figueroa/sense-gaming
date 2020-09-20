const { query } = require("express")
const path = require("path")
const { param } = require("../routes/products")
const dbProducts=require(path.join(__dirname, "..", "data", "dbProducts"))

module.exports= {
    listar:function(req,res){
        res.send(dbProducts)
    },
    detalle:function(req,res){
        idProducto = req.params.id;
        let producto=dbProducts.filter(producto=>{
            return producto.id==idProducto
        })
        
        res.render("products",{
            title:"DETALLE DEL PRODUCTO",
            producto:producto[0]
        })
    },
    search:function(req,res){
        
        res.render("index",{
            title:"RESULTADO DE LA BUSQUEDA",
            producto:productos
        })
    },
    busqueda:function(req,res){
        
        res.render("products",{
            title:"RESULTADO DE LA BUSQUEDA"
        })
    }
}