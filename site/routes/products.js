const express = require("express")
const router = express.Router()
const productController = require("../controllers/productsController")

router.get("/",productController.listar)
router.get("/detalle/:id",productController.detalle)
router.get("/search",productController.search)

module.exports=router