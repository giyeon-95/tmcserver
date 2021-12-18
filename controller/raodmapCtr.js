const Roadmap = require("../model/roadmap");
const jwt = require("jsonwebtoken");

const roadmapCtr = {
  roadmapList : async (req,res) =>{
    const all = await Roadmap.find({});
    res.status(200).json({
        status: 200,
        result: true,
        msg: "roadmap list success",
        data : all
    })
  },
  createRoadmap: async (req, res) => {
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

    const roadmap = new Roadmap({
        content : content,
    })

    await roadmap.save().then((_) => {
        res.status(200).json({
            status : 200 ,
            result : true,
            msg : "roadmap create successed",
        });    
    }).catch((err) => {
        console.log(err);
    });
  },
  editRoadmap : async (req, res)=>{

  } 
};

module.exports = roadmapCtr;
