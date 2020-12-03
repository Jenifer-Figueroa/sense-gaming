const {check,validationResult,body} = require('express-validator');


module.exports = [

check('nombre')
.isLength({
    min:4,
    max:200
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
    min:10,
    max:1000
})
.withMessage('El detalle del producto tiene que tener mas de 10 caracteres'),

body('imagen')
    .custom((value,{req})=>{
        if(req.fileValidationError){
            return false
        }else{
            return true
        }
    }).withMessage("Solo se permite png, jpg, jpeg, gif")



]