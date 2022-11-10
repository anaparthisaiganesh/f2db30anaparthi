const mongoose = require("mongoose") 
const jeepSchema = mongoose.Schema({ 
 jeep_color: String, 
 jeep_cost: Number, 
 jeep_speed: Number 
}) 
 
module.exports = mongoose.model("jeep", jeepSchema)




