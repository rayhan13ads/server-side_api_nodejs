var express = require('express');
var router = express.Router();

const controller = require('../controllers/leaderController');

/* GET users listing. */
router.get('/', controller.getLeader);

module.exports = router;
