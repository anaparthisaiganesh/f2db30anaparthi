var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var jeep_controller = require('../controllers/jeep'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a jeep.  
router.post('/jeep', jeep_controller.jeep_create_post); 
 
// DELETE request to delete jeep. 
router.delete('/jeep/:id', jeep_controller.jeep_delete); 
 
// PUT request to update jeep. 
router.put('/jeep/:id', jeep_controller.jeep_update_put); 
 
// GET request for one jeep. 
router.get('/jeep/:id', jeep_controller.jeep_detail); 
 
// GET request for list of all jeep items. 
router.get('/jeep', jeep_controller.jeep_list); 
 
module.exports = router;