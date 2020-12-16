var express = require('express');
var router = express.Router();
const indexC = require("../controllers/indexController")
const cookies = require('../middlewares/cookieCheck')

/* GET home page. */
router.get('/',cookies,indexC.index)
router.get('/teclados', indexC.teclados)
router.get('/software', indexC.software)
router.get('/notebook', indexC.notebook)
router.get('/perifericos', indexC.perifericos)
router.get('/impresoras', indexC.impresoras)
router.get('/accesorios', indexC.accesorios)
router.get('/monitores', indexC.monitores)
router.get('/hogar-empresa', indexC.hogarEmpresa)
router.get('/gaming', indexC.gaming)
router.get('/entretenimiento',indexC.entretenimiento)

module.exports = router;
