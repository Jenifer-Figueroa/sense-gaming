var express = require('express');
var router = express.Router();
const userController = require('../controllers/usersController');
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');
const upImagesUsers = require('../middlewares/upImagesUsers');

router.get('/register', userController.register);
router.post('/register', upImagesUsers.any(),registerValidator, userController.processRegister);

router.get('/login', userController.login);
router.post('/login', loginValidator, userController.processLogin);

router.get('profile', userController.profile);

router.get('/logout', userController.logout);


module.exports = router;
