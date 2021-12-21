const mongoose = require('mongoose');  
const Schema = mongoose.Schema; 

const qnaSchema = new Schema ({
    useremail : String, 
    title : String,
    content : String,
    answered : Boolean,
    comments : Array,
},{timestamps : true, versionKey : false});

module.exports= mongoose.model('qna', qnaSchema);