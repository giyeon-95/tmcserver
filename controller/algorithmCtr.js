const Algorithm = require("../model/algorithm");
const jwt = require("jsonwebtoken");

const algorithmCtr = {
    myalgo : async (req,res) =>{
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
    
        const exist = await Algorithm.findOne({ useremail: useremail1 });
    
        if (!exist) {
          res.status(200).json({
            status: 400,
            result: false,
            msg: "no data",
          });
        } else {
          res.status(200).json({
            status: 200,
            result: true,
            data : exist,
          });
        }    
      },

  algoSave: async (req, res) => {
    let useremail1 = "";

    const token = req.headers.access_token;

    const { data } = req.body;
    console.log(req.body) ;

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

    const exist = await Algorithm.findOne({ useremail: useremail1 });

    if (!exist) {
      const algorithm = new Algorithm({
        useremail: useremail1,
        data: data,
      });
      await algorithm.save();
      res.status(200).json({
        status: 200,
        result: true,
        msg: "save successed",
      });
    } else {
      const update = { data: data };
      await Algorithm.findOneAndUpdate({ useremail: useremail1 }, update);
      res.status(200).json({
        status: 200,
        result: true,
        msg: "save successed",
      });
    }
  },
};

module.exports = algorithmCtr;
