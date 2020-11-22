const {check,validationResult,body} = require('express-validator');

const path = require('path')

let db = require('../database/models')

module.exports =[

 check('nombre')
.isLength({
    min:4
    })
.withMessage('El nombre del producto tiene que tener mas de 4 caracteres'),

check('categoria')
.isLength({
    min:1
})
.withMessage('Debes ingresar la categoria del producto'),

check('precio')
.isLength({
    min:2
})
.withMessage('El precio del producto debe tener mas de 2 cifras'),

check('descripcion')
.isLength({
    min:10
})
.withMessage('El detalle del producto tiene que tener mas de 10 caracteres'),

body('imagen')
.custom((value,{req})=>{
    if(!req.files[0]){
        return false
    }else{
        return true
    }
})
.withMessage("Tenés que subir una imagen")


]