const express = require("express")
const router = express.Router()
const productController = require("../controllers/productsController")
const upImagesProducts = require('../middlewares/upImagesProducts')




router.get("/",productController.listar)
router.get("/detalle/:id",productController.detalle)
router.get("/search",productController.search)

router.get("/add", productController.agregar)
router.post("/add",upImagesProducts.any(), productController.publicar)

router.get("/edit", productController.vista)
router.get('/show/:id', productController.show)
router.put('/show/:id', upImagesProducts.any(), productController.editar)

router.delete('/delete/:id', productController.eliminar)

module.exports=router