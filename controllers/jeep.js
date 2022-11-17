var jeep = require('../models/jeep'); 
 
// List of all jeep 
exports.jeep_list = async function(req, res) { 
    try{ 
        thejeep = await jeep.find(); 
        res.send(thejeep); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 

exports.jeep_view_all_Page = async function(req, res) { 
    try{ 
        thejeep = await jeep.find(); 
        res.render('jeep', { title: 'jeep Search Results', results: thejeep }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle jeep create on POST. 
exports.jeep_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new jeep(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    //{jeep_color:"Black",jeep_cost:1500000,jeep_speed:100}
    document.jeep_color = req.body.jeep_color;    
    document.jeep_cost = req.body.jeep_cost;
    document.jeep_speed = req.body.jeep_speed;  
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific jeep. 
exports.jeep_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: jeep detail: ' + req.params.id); 
}; 

// for a specific jeep. 
exports.jeep_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await jeep.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 

}; 
// Handle a show one view with id specified by query
exports.jeep_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await jeep.findById(req.query.id)
        res.render('jeepdetails',
            { title: 'jeep Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a jeep.
// No body, no in path parameter, no query.
// Does not need to be async
exports.jeep_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('jeepcreate', { title: 'jeep Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.jeep_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await jeep.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
}

// Handle building the view for updating a jeep.
// query provides the id
exports.jeep_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await jeep.findById(req.query.id)
        res.render('jeepupdate', { title: 'jeep Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.jeep_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await jeep.findById(req.query.id)
        res.render('jeepdelete', {
            title: 'jeep Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle jeep update form on PUT. 
exports.jeep_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await jeep.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.jeep_color)  
               toUpdate.jeep_color = req.body.jeep_color; 
        if(req.body.jeep_cost) toUpdate.jeep_cost = req.body.jeep_cost; 
        if(req.body.jeep_speed) toUpdate.jeep_speed = req.body.jeep_speed; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 