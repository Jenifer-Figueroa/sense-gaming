var express = require('express');
var router = express.Router();
const indexC = require("../controllers/indexController")
const localsUsersCheck = require('../middlewares/localsUserCheck')

/* GET home page. */
router.get('/',localsUsersCheck,indexC.index)

module.exports = router;
