const { query } = require("express")
const path = require("path")
const { param } = require("../routes/products")
const dbProducts=require(path.join(__dirname, "..", "data", "dbProducts"))

module.exports= {
    listar:function(req,res){
        res.render("products",{
            title:"NUESTOS PRODUCTOS",
            productos:dbProducts
        })
    },
    detalle:function(req,res){
        idProducto = req.params.id;
        let producto=dbProducts.filter(producto=>{
            return producto.id==idProducto
        })
        
        res.render("productDetail",{
            title:"DETALLE DEL PRODUCTO",
            producto:producto[0]
        })
    },
    busqueda:function(req,res){
        
        res.render("products",{
            title:"RESULTADO DE LA BUSQUEDA"
        })
    }
}