var express = require('express');
var router = express.Router();
const authRouter = require("./auth");
const jwtRouter = require("./jwt") ;
const algoRouter = require("./algorithm") ;
const apiKeyRouter = require("./apiKey") ;
const noticeRouter = require("./notice") ;
const qnaRouter = require("./qna") ;
const engineRouter = require('./engine'); 
const roadmapRouter = require('./roadmap'); 
const whitepaperRouter = require('./whitepaper'); 

/* GET home page. */
// router.get('/', function(req, res) {
//     res.send('welcome to TMC Server'); 
// });

router.use('/auth' , authRouter); 
router.use('/apiKey', apiKeyRouter) ;
router.use('/algorithm', algoRouter) ;
router.use('/jwt', jwtRouter );
router.use('/notice', noticeRouter );
router.use('/qna', qnaRouter );
router.use('/engine', engineRouter );
router.use('/roadmap', roadmapRouter );
router.use('/whitepaper',  whitepaperRouter);

module.exports = router;