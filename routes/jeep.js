var express = require('express');
const jeep_controlers= require('../controllers/jeep');
var router = express.Router();

module.exports = router;
router.get('/', jeep_controlers.jeep_view_all_Page );


