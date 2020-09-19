const path = require("path")
const dbProducts=require(path.join(__dirname, "..", "data", "dbProducts"))

module.exports={
    index:((req,res,next)=>{
        let destacado = dbProducts.filter(producto=>{
            return producto.category == "destacado"
        })

        res.render("index",{
            title:"SENSE GAMING",
            css:"styles.css",
            destacado: destacado
        })
    })
}