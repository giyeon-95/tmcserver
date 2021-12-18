const ApiKey = require("../model/apiKey");
const jwt = require("jsonwebtoken");

const keyCtr = {
  mykey : async (req,res) =>{
    let useremail1 = "";

    const token = req.headers.access_token;

    if(!token){
      res.status(400).json({
        status: 400,
        result: false,
        msg: "token error",
      })
      return ; 
    }

    try {
      const decoded = jwt.verify(token, "tmctmc");
      useremail1 = decoded.useremail;
    } catch (e) {
      console.log(e);
    }

    const exist = await ApiKey.findOne({ useremail: useremail1 });

    if (!exist) {
      res.status(200).json({
        status: 400,
        result: false,
        msg: "get successed",
      });
    } else {
      res.status(200).json({
        status: 200,
        result: true,
        msg: "api key success",
        key : exist,
      });
    }    
  }, 
  bithumb: async (req, res) => {
    let useremail1 = "";
    const { bithumbC, bithumbS } = req.body;

    const token = req.headers.access_token;
    
    if(!token){
      res.status(400).json({
        status: 400,
        result: false,
        msg: "token error",
      })
      return ; 
    }

    try {
      const decoded = jwt.verify(token, "tmctmc");
      useremail1 = decoded.useremail;
    } catch (e) {
      console.log(e);
    }

    const exist = await ApiKey.findOne({ useremail: useremail1 });

    if (!exist) {
      const apiKey = new ApiKey({
        useremail: useremail1,
        bithumbC: bithumbC,
        bithumbS: bithumbS,
        upbitC : '', 
        upbitS : '', 
        coinoneC : '', 
        coinoneS : '', 
        korbitC : '', 
        korbitS : '', 
        binanceC : '',
        binanceS : '',
        huobiC : '', 
        huobiS : '', 
        bitfinexC : '', 
        bitfinexS : '', 
        bitflyerC: '',
        bitflyerS: '',
      });
      await apiKey.save();
      res.status(200).json({
        status: 200,
        result: true,
        msg: "save successed",
      });
    } else {
      const update = { bithumbC: bithumbC, bithumbS: bithumbS };
      await ApiKey.findOneAndUpdate({ useremail: useremail1 }, update);
      res.status(200).json({
        status: 200,
        result: true,
        msg: "api key success",
      });
    }
  },
  upbit: async (req, res) => {
    let useremail1 = "";
    const { upbitC, upbitS } = req.body;

    const token = req.headers.access_token;

    if(!token){
      res.status(400).json({
        status: 400,
        result: false,
        msg: "token error",
      })
      return ; 
    }

    try {
      const decoded = jwt.verify(token, "tmctmc");
      useremail1 = decoded.useremail;
    } catch (e) {
      console.log(e);
    }

    const exist = await ApiKey.findOne({ useremail: useremail1 });

    if (!exist) {
      const apiKey = new ApiKey({
        useremail: useremail1,
        upbitC: upbitC,
        upbitS: upbitS,
        bithumbC: '',
        bithumbS: '',
        coinoneC : '', 
        coinoneS : '', 
        korbitC : '', 
        korbitS : '', 
        binanceC : '',
        binanceS : '',
        huobiC : '', 
        huobiS : '', 
        bitfinexC : '', 
        bitfinexS : '', 
        bitflyerC: '',
        bitflyerS: '',
      });
      await apiKey.save();
      res.status(200).json({
        status: 200,
        result: true,
        msg: "save successed",
      });
    } else {
      const update = { upbitC: upbitC, upbitS: upbitS };
      await ApiKey.findOneAndUpdate({ useremail: useremail1 }, update);
      res.status(200).json({
        status: 200,
        result: true,
        msg: "api key success",
      });
    }
  },
  coinone: async (req, res) => {
    let useremail1 = "";
    const { coinoneC, coinoneS } = req.body;

    const token = req.headers.access_token;

    if(!token){
      res.status(400).json({
        status: 400,
        result: false,
        msg: "token error",
      })
      return ; 
    }

    try {
      const decoded = jwt.verify(token, "tmctmc");
      useremail1 = decoded.useremail;
    } catch (e) {
      console.log(e);
    }

    const exist = await ApiKey.findOne({ useremail: useremail1 });

    if (!exist) {
      const apiKey = new ApiKey({
        useremail: useremail1,
        coinoneC: coinoneC,
        coinoneS: coinoneS,
        upbitC: '',
        upbitS: '',
        bithumbC: '',
        bithumbS: '',
        korbitC : '', 
        korbitS : '', 
        binanceC : '',
        binanceS : '',
        huobiC : '', 
        huobiS : '', 
        bitfinexC : '', 
        bitfinexS : '', 
        bitflyerC: '',
        bitflyerS: '',
      });
      await apiKey.save();
      res.status(200).json({
        status: 200,
        result: true,
        msg: "save successed",
      });
    } else {
      const update = { coinoneC: coinoneC, coinoneS: coinoneS };
      await ApiKey.findOneAndUpdate({ useremail: useremail1 }, update);
      res.status(200).json({
        status: 200,
        result: true,
        msg: "api key success",
      });
    }
  },
  korbit: async (req, res) => {
    let useremail1 = "";
    const { korbitC, korbitS } = req.body;

    const token = req.headers.access_token;

    if(!token){
      res.status(400).json({
        status: 400,
        result: false,
        msg: "token error",
      })
      return ; 
    }

    try {
      const decoded = jwt.verify(token, "tmctmc");
      useremail1 = decoded.useremail;
    } catch (e) {
      console.log(e);
    }

    const exist = await ApiKey.findOne({ useremail: useremail1 });

    if (!exist) {
      const apiKey = new ApiKey({
        useremail: useremail1,
        korbitC: korbitC,
        korbitS: korbitS,
        coinoneC: '',
        coinoneS: '',
        upbitC: '',
        upbitS: '',
        bithumbC: '',
        bithumbS: '',
        binanceC : '',
        binanceS : '',
        huobiC : '', 
        huobiS : '', 
        bitfinexC : '', 
        bitfinexS : '', 
        bitflyerC: '',
        bitflyerS: '',
      });
      await apiKey.save();
      res.status(200).json({
        status: 200,
        result: true,
        msg: "api key success",
      });
    } else {
      const update = { korbitC: korbitC, korbitS: korbitS };
      await ApiKey.findOneAndUpdate({ useremail: useremail1 }, update);
      res.status(200).json({
        status: 200,
        result: true,
        msg: "api key success",
      });
    }
  },
  binance: async (req, res) => {
    let useremail1 = "";
    const { binanceC, binanceS } = req.body;
    const token = req.headers.access_token;


    if(!token){
      res.status(400).json({
        status: 400,
        result: false,
        msg: "token error",
      })
      return ; 
    }

    try {
      const decoded = jwt.verify(token, "tmctmc");
      useremail1 = decoded.useremail;
    } catch (e) {
      console.log(e);
    }

    const exist = await ApiKey.findOne({ useremail: useremail1 });

    if (!exist) {
      const apiKey = new ApiKey({
        useremail: useremail1,
        binanceC: binanceC,
        binanceS: binanceS,
        korbitC: '',
        korbitS: '',
        coinoneC: '',
        coinoneS: '',
        upbitC: '',
        upbitS: '',
        bithumbC: '',
        bithumbS: '',
        huobiC : '', 
        huobiS : '', 
        bitfinexC : '', 
        bitfinexS : '', 
        bitflyerC: '',
        bitflyerS: '',
      });
      await apiKey.save();
      res.status(200).json({
        status: 200,
        result: true,
        msg: "api key success",
      });
    } else {
      const update = { binanceC: binanceC, binanceS: binanceS };
      await ApiKey.findOneAndUpdate({ useremail: useremail1 }, update);
      res.status(200).json({
        status: 200,
        result: true,
        msg: "api key success",
      });
    }
  },
  huobi: async (req, res) => {
    let useremail1 = "";
    const { huobiC, huobiS } = req.body;

    const token = req.headers.access_token;


    if(!token){
      res.status(400).json({
        status: 400,
        result: false,
        msg: "token error",
      })
      return ; 
    }

    try {
      const decoded = jwt.verify(token, "tmctmc");
      useremail1 = decoded.useremail;
    } catch (e) {
      console.log(e);
    }

    const exist = await ApiKey.findOne({ useremail: useremail1 });

    if (!exist) {
      const apiKey = new ApiKey({
        useremail: useremail1,
        huobiC: huobiC,
        huobiS: huobiS,
        binanceC: '',
        binanceS: '',
        korbitC: '',
        korbitS: '',
        coinoneC: '',
        coinoneS: '',
        upbitC: '',
        upbitS: '',
        bithumbC: '',
        bithumbS: '',
        bitfinexC : '', 
        bitfinexS : '', 
        bitflyerC: '',
        bitflyerS: '',
      });
      await apiKey.save();
      res.status(200).json({
        status: 200,
        result: true,
        msg: "api key success",
      });
    } else {
      const update = { huobiC: huobiC, huobiS: huobiS };
      await ApiKey.findOneAndUpdate({ useremail: useremail1 }, update);
      res.status(200).json({
        status: 200,
        result: true,
        msg: "api key success",
      });
    }
  },
  bitfinex: async (req, res) => {
    let useremail1 = "";
    const { bitfinexC, bitfinexS } = req.body;
    const token = req.headers.access_token;

    if(!token){
      res.status(400).json({
        status: 400,
        result: false,
        msg: "token error",
      })
      return ; 
    }
    
    try {
      const decoded = jwt.verify(token , "tmctmc");
      useremail1 = decoded.useremail;
    } catch (e) {
      console.log(e);
    }

    const exist = await ApiKey.findOne({ useremail: useremail1 });

    if (!exist) {
      const apiKey = new ApiKey({
        useremail: useremail1,
        bitfinexC: bitfinexC,
        bitfinexS: bitfinexS,
        huobiC: '',
        huobiS: '',
        binanceC: '',
        binanceS: '',
        korbitC: '',
        korbitS: '',
        coinoneC: '',
        coinoneS: '',
        upbitC: '',
        upbitS: '',
        bithumbC: '',
        bithumbS: '',
        bitflyerC: '',
        bitflyerS: '',
      });
      await apiKey.save();
      res.status(200).json({
        status: 200,
        result: true,
        msg: "api key success",
      });
    } else {
      const update = { bitfinexC: bitfinexC, bitfinexS: bitfinexS };
      await ApiKey.findOneAndUpdate({ useremail: useremail1 }, update);
      res.status(200).json({
        status: 200,
        result: true,
        msg: "api key success",
      });
    }
  },
  bitflyer: async (req, res) => {
    let useremail1 = "";
    const { bitflyerC, bitflyerS } = req.body;

    const token = req.headers.access_token;


    if(!token){
      res.status(400).json({
        status: 400,
        result: false,
        msg: "token error",
      })
      return ; 
    }
    
    try {
      const decoded = jwt.verify(token , "tmctmc");
      useremail1 = decoded.useremail;
    } catch (e) {
      console.log(e);
    }

    const exist = await ApiKey.findOne({ useremail: useremail1 });

    if (!exist) {
      const apiKey = new ApiKey({
        useremail: useremail1,
        bitflyerC: bitflyerC,
        bitflyerS: bitflyerS,
        bitfinexC: '',
        bitfinexS: '',
        huobiC: '',
        huobiS: '',
        binanceC: '',
        binanceS: '',
        korbitC: '',
        korbitS: '',
        coinoneC: '',
        coinoneS: '',
        upbitC: '',
        upbitS: '',
        bithumbC: '',
        bithumbS: '',
      });
      await apiKey.save();
      res.status(200).json({
        status: 200,
        result: true,
        msg: "api key success",
      });
    } else {
      const update = { bitflyerC: bitflyerC, bitflyerS: bitflyerS };
      await ApiKey.findOneAndUpdate({ useremail: useremail1 }, update);
      res.status(200).json({
        status: 200,
        result: true,
        msg: "api key success",
      });
    }
  },
};

module.exports = keyCtr;
