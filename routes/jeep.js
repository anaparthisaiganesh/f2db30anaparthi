var express = require('express');
const jeep_controlers= require('../controllers/jeep');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
module.exports = router;
router.get('/', jeep_controlers.jeep_view_all_Page );
/* GET detail jeep page */
router.get('/detail', jeep_controlers.jeep_view_one_Page);
/* GET create jeep page */
router.get('/create',secured, jeep_controlers.jeep_create_Page);
/* GET create update page */
router.get('/update',secured, jeep_controlers.jeep_update_Page);
/* GET delete jeep page */
router.get('/delete',secured, jeep_controlers.jeep_delete_Page);


