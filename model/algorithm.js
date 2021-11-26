const mongoose = require('mongoose');  
const Schema = mongoose.Schema; 

const algorithmSchema = new Schema ({
    useremail : String, 
    data : String,
})

module.exports= mongoose.model('algorithm', algorithmSchema);