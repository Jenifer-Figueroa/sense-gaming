var express = require('express');
var router = express.Router();
const loginC = require("../controllers/login")

router.get('/', loginC.login)

module.exports = router;