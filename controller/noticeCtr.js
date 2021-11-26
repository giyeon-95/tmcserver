const Notice = require("../model/notice");
const jwt = require("jsonwebtoken");

const noticeCtr = {
  noticeList : async (req,res) =>{
    const all = await Notice.find({});
    res.status(200).json({
        status: 200,
        result: true,
        msg: "notice list success",
        data : all
    })
  },
  createNotice: async (req, res) => {
    let useremail1 = "";
    const { title, content } = req.body;
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

    const notice = new Notice({
        useremail : useremail1, 
        title : title, 
        content : content,
    })

    await notice.save().then((_) => {
        res.status(200).json({
            status : 200 ,
            result : true,
            msg : "notice create successed",
        });    
    }).catch((err) => {
        console.log(err);
    });
  },
};

module.exports = noticeCtr;
