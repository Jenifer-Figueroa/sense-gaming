const path = require("path")
const dbProducts=require(path.join(__dirname, "..", "data", "dbProducts"))

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
    })
}