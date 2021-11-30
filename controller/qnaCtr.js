const QnA = require("../model/qna"); 
const jwt = require("jsonwebtoken");
const moment = require('moment'); 

const qnaCtr = {
  qnaList : async (req,res) =>{
    const all = await QnA.find({});
    res.status(200).json({
        status: 200,
        result: true,
        msg: "qna list success",
        data : all
    })
  },
  createQna: async (req, res) => {
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

    const qna = new QnA({
        useremail : useremail1, 
        title : title, 
        content : content,
        answered : false, 
        comments : [],
    })

    await qna.save().then((_) => {
        res.status(200).json({
            status : 200 ,
            result : true,
            msg : "qna create successed",
        });    
    }).catch((err) => {
        console.log(err);
    });
  },
  createQnaComment: async (req, res) => {
    let useremail1 = "";
    const { id ,content } = req.body;

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

    const update = { comments: [{
      author : '관리자',
    }]};

    await QnA.findOneAndUpdate({_id : id }, update)

    res.status(200).json({
      status: 200,
      result: true,
      msg: "comment create success",
    });
  },
};

module.exports = qnaCtr;
