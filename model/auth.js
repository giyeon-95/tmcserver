const mongoose = require('mongoose');  
const Schema = mongoose.Schema; 

const authSchema = new Schema ({
    useremail : String, 
    password : String,
    class : String,
    grade : String,
    balance : Number,
    connected : Boolean,
},{timestamps : true, versionKey : false});

module.exports= mongoose.model('auth', authSchema);