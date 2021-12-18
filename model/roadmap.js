const mongoose = require('mongoose');  
const Schema = mongoose.Schema; 

const roadmapSchema = new Schema ({
    content : String,
},{timestamps : true});

module.exports= mongoose.model('roadmap', roadmapSchema);