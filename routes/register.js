var express = require('express');
var router = express.Router();
const registerC = require("../controllers/register")

router.get('/', registerC.register)

module.exports = router;