const express = require("express")
const router = express.Router()
const productController = require("../controllers/productsController")

router.get("/",productController.listar)
router.get("/detalle/:id",productController.detalle)
router.get("/search",productController.search)

router.get("/add", productController.agregar)
router.post("/add", productController.publicar)

router.get("/edit", productController.vista)
router.get('/show/:id', productController.show)
router.put('/show/:id', productController.editar)

module.exports=router