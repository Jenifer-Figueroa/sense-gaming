var express = require('express');
var router = express.Router();
const loginC = require("../controllers/login")
const loginValidator = require('../validations/loginValidator');

router.get('/', loginC.login)
router.post('/',loginValidator,loginC.processLogin); 

module.exports = router;