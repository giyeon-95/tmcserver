const mongoose = require('mongoose');  
const Schema = mongoose.Schema; 

const authSchema = new Schema ({
    useremail : String, 
    password : String,
    class : String,
    grade : String,
    balance : Number,
    connected : Boolean,
})

module.exports= mongoose.model('auth', authSchema);