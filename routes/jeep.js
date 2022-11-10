var express = require('express');
const jeep_controlers= require('../controllers/jeep');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jeep', { title: 'Search results jeep' });
});

module.exports = router;
router.get('/', jeep_controlers.jeep_view_all_Page );


