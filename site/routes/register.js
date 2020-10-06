var express = require('express');
var router = express.Router();
const registerC = require("../controllers/register")
const registerValidator = require('../validations/registerValidator')
const upImagesUsers = require('../middlewares/upImagesUsers')

router.get('/', registerC.register)
router.post('/',upImagesUsers.any(),registerValidator,registerC.processRegister);

module.exports = router;