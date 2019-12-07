var express = require('express');
var router = express.Router();

const dishController = require('../controllers/dishController');

/* GET users listing. */
router.get('/', dishController.getDish);

module.exports = router;
