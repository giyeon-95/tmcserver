const mongoose = require('mongoose');  
const Schema = mongoose.Schema; 
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

const engineSchema = new Schema ({
    seq : Number,
    useremail : String, 
    title : String, 
    content : String,
    file : String,
},{timestamps : true, versionKey : false});

engineSchema.plugin(autoIncrement.plugin, {
    model : "engine",
    field : "seq", 
    startAt : 1,
    increment : 1, 
});

module.exports= mongoose.model('engine', engineSchema);