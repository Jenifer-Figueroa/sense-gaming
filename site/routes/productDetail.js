var express = require('express');
var router = express.Router();
const productDetail = require("../controllers/productDetailController")

router.get('/', productDetail.productDetail)

module.exports = router;