const mongoose = require('mongoose');  
const Schema = mongoose.Schema; 

const engineSchema = new Schema ({
    useremail : String, 
    title : String, 
    content : String,
    file : String,
},{timestamps : true, versionKey : false})

module.exports= mongoose.model('engine', engineSchema);