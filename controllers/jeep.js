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

// Handle Costume create on POST. 
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
 

// Handle jeep delete form on DELETE. 
exports.jeep_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: jeep delete DELETE ' + req.params.id); 
}; 
 
// Handle jeep update form on PUT. 
exports.jeep_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: jeep update PUT' + req.params.id); 
}; 