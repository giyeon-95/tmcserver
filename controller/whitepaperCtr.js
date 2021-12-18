const Whitepaper = require('../model/whitepaper'); 
const jwt = require("jsonwebtoken");

const whitepaperCtr = {
  whitepaperList : async (req,res) =>{
    const all = await Whitepaper.find({});
    res.status(200).json({
        status: 200,
        result: true,
        msg: "whitepaper list success",
        data : all
    })
  },
  createWhitepaper: async (req, res) => {
    let useremail1 = "";
    const { content } = req.body;
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

    const exist = await Whitepaper.findOne({_id : '61be31d2fbb1f45d4d25fe97'});

    if(!exist){

        const whitepaper = new Whitepaper({
            content : content,
        })
    
        await whitepaper.save().then((_) => {
            res.status(200).json({
                status : 200 ,
                result : true,
                msg : "whitepaper create successed",
            });    
        }).catch((err) => {
            console.log(err);
        });

    }else{
        const update = { content: content};
        await Whitepaper.findOneAndUpdate({ _id : '61be31d2fbb1f45d4d25fe97' }, update);
        res.status(200).json({
            status: 200,
            result: true,
            msg: "whitepaper edit success",
        });

    }
  },
};

module.exports = whitepaperCtr;
