var express = require('express');
const jeep_controlers= require('../controllers/jeep');
var router = express.Router();


module.exports = router;
router.get('/', jeep_controlers.jeep_view_all_Page );
/* GET detail jeep page */
router.get('/detail', jeep_controlers.jeep_view_one_Page);
/* GET create jeep page */
router.get('/create', jeep_controlers.jeep_create_Page);
/* GET create update page */
router.get('/update', jeep_controlers.jeep_update_Page);
/* GET delete jeep page */
router.get('/delete', jeep_controlers.jeep_delete_Page);


