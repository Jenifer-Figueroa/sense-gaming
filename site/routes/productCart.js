var express = require('express');
var router = express.Router();
const productCart = require("../controllers/productCartController")

router.get('/', productCart.productCart)

module.exports = router;