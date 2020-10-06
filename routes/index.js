var express = require('express');
var router = express.Router();
const indexC = require("../controllers/indexController")
const cookieCheck = require('../middlewares/cookieCheck');

/* GET home page. */
router.get('/',cookieCheck,indexC.index)

module.exports = router;
