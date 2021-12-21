const mongoose = require('mongoose');  
const Schema = mongoose.Schema; 

const whitepaperSchema = new Schema ({
    content : String,
},{timestamps : true, versionKey : false});

module.exports= mongoose.model('whitepaper', whitepaperSchema);