var express = require('express');
var router = express.Router();
const indexC = require("../controllers/indexController")
const cookies = require('../middlewares/cookieCheck')

/* GET home page. */
router.get('/',cookies,indexC.index)

module.exports = router;
