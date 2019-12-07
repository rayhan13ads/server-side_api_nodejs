var express = require('express');
var router = express.Router();

const controller = require('../controllers/promoController');

/* GET users listing. */
router.get('/', controller.getPromo);

module.exports = router;
