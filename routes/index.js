var express = require('express');
var router = express.Router();
const indexC = require("../controllers/indexController")


/* GET home page. */
router.get('/', indexC.index)

module.exports = router;
