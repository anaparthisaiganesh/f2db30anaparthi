const mongoose = require("mongoose") 
const jeepSchema = mongoose.Schema({ 
 jeep_color: {type:String}, 
 jeep_cost: {type:Number,min:9,max:1600000},
 jeep_speed: {type:Number,min:8}  
}) 
 
module.exports = mongoose.model("jeep", jeepSchema)




