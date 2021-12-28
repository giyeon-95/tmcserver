const mongoose = require('mongoose');  
const Schema = mongoose.Schema; 
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

const noticeSchema = new Schema ({
    seq : Number,
    useremail : String, 
    title : String,
    content : String,
},{timestamps : true, versionKey : false});

noticeSchema.plugin(autoIncrement.plugin, {
    model : "notice",
    field : "seq", 
    startAt : 1,
    increment : 1, 
});

module.exports= mongoose.model('notice', noticeSchema);