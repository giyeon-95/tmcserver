const Engine = require("../model/engine");
const jwt = require("jsonwebtoken");


const engineCtr = {
  engineList : async (req,res) =>{
    const all = await Engine.find({});
    res.status(200).json({
        status: 200,
        result: true,
        msg: "engine list success",
        data : all
    })
  },
  createEngine: async (req, res) => {
    
    let useremail1 = "";
    const { title, content } = JSON.parse(JSON.stringify(req.body));

    const token = req.headers.access_token;

    console.log(req.file.location); 
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

    const engine = new Engine({
        useremail : useremail1, 
        title : title, 
        content : content ,
        file : req.file.location,
    })

    await engine.save().then((_) => {
        res.status(200).json({
            status : 200 ,
            result : true,
            msg : "engine create successed",
            file : req.file.location,
        });    
    }).catch((err) => {
        console.log(err);
    });
  },
};

module.exports = engineCtr;
