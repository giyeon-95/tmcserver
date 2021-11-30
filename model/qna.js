const mongoose = require('mongoose');  
const Schema = mongoose.Schema; 

const qnaSchema = new Schema ({
    useremail : String, 
    title : String,
    content : String,
    answered : Boolean,
    comments : String,
},{timestamps : true});

module.exports= mongoose.model('qna', qnaSchema);