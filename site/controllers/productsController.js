const fs = require('fs')
const path = require("path")
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
    search:function(req,res){
        let busqueda = req.query.search;
        if(busqueda == ""){
            res.redirect('/')
        }else{

            let productos = [];
            dbProducts.forEach(producto=>{
                if(producto.name.toLowerCase().includes(busqueda.toLowerCase())){
                    productos.push(producto)
                }
            })
            res.render('products',{
                title: "Resultado de la busqueda",
                productos:productos
            })
        }
     
    },
    agregar: function(req, res){
        res.render('productAdd',{
            title: 'PUBLICAR PRODUCTO'
        })
    },
    publicar: function(req, res){
        let lastId =1;
        dbProducts.forEach(producto=>{
            if(producto.id > lastId){
                lastId = producto.id
            }
        })
        let newProduct ={
            id: lastId +1,
            name: req.body.name,
            price: Number(req.body.price),
            description: req.body.description,
            image: "default-image.png"
        }
        dbProducts.push(newProduct);
        fs.writeFileSync(path.join(__dirname, "..", "data","productos.json"),JSON.stringify(dbProducts),'utf-8')
        res.redirect('/products')
    },
    vista:function(req, res){
        res.render('productVistaEdit',{
            title: "Mis productos",
            productos:dbProducts
        })
    },
    show:function(req, res){
        let idProducto = req.params.id;
        
        let resultado = dbProducts.filter(producto=>{
            return producto.id == idProducto
        })
        res.render('productShow',{
            title: "VER/ EDITAR PRODUCTO",
            producto: resultado[0],
            
        })
    },
    editar:function(req, res){
        let idProducto=req.params.id;

        dbProducts.forEach(producto=>{
            if(producto.id == idProducto){
                
                producto.price = req.body.price,
                producto.name = req.body.name,
                producto.category = req.body.category,
                producto.description = req.body.description,
                producto.image= producto.image
            }
        })
        fs.writeFileSync(path.join(__dirname,'..','data','productos.json'),JSON.stringify(dbProducts))
        res.redirect('/products/detalle/'+ req.params.id)
    },
    eliminar:function(req, res){
        let indiceDelProducto;
        dbProducts.forEach(producto=>{
            if(producto.id == req.params.id){
                indiceDelProducto = dbProducts.indexOf(producto)
            }
        })
        dbProducts.splice(indiceDelProducto, 1)

        let productosJson = JSON.stringify(dbProducts)
        fs.writeFileSync(path.join(__dirname,'..','data','productos.json'),productosJson)
        res.redirect('/products/edit')
    }
}
