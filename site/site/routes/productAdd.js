var express = require('express');
var router = express.Router();
const productAdd = require("../controllers/productAddController")

router.get('/', productAdd.productAddController)

module.exports = router;