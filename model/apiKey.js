const mongoose = require('mongoose');  
const Schema = mongoose.Schema; 

const apiKeySchema = new Schema ({
    useremail : String, 
    bithumbC : String,
    bithumbS : String,
    upbitC : String, 
    upbitS : String, 
    coinoneC : String, 
    coinoneS : String, 
    korbitC : String, 
    korbitS : String, 
    binanceC : String,
    binanceS : String,
    huobiC : String, 
    huobiS : String, 
    bitfinexC : String, 
    bitfinexS : String, 
    bitflyerC: String,
    bitflyerS: String,
})

module.exports= mongoose.model('apiKey', apiKeySchema);