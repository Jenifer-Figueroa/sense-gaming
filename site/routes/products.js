const express = require("express")
const router = express.Router()
const productController = require("../controllers/productsController")
const upImagesProducts = require('../middlewares/upImagesProducts')
const productValidator= require('../validations/productValidator')

const mwAdmin = require('../middlewares/mwAdmin')
const mwUser = require('../middlewares/mwUser')


router.get("/",productController.listar)
router.get("/detalle/:id", productController.detalle)
router.get("/search",productController.search)

router.get("/add", mwAdmin, productValidator, productController.agregar)
router.post("/add",upImagesProducts.any(), productController.publicar)

router.get("/edit", mwAdmin, productController.vista)
router.get('/show/:id', mwAdmin, productController.show)
router.put('/show/:id', upImagesProducts.any(), productController.editar)

router.delete('/delete/:id', mwAdmin, productController.eliminar)

module.exports=router