var express = require('express');
var router = express.Router();
const profileC = require("../controllers/profile")

router.get('/',profileC.profile);
router.get('/',profileC.logout);

module.exports = router;