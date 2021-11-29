var express = require('express');
var router = express.Router();
const authRouter = require("./auth");
const jwtRouter = require("./jwt") ;
const algoRouter = require("./algorithm") ;
const apiKeyRouter = require("./apiKey") ;
const noticeRouter = require("./notice") ;
const qnaRouter = require("./qna") ;
const engineRouter = require('./engine'); 

/* GET home page. */
// router.get('/', function(req, res) {
//     res.send('welcome to TMC Server'); 
// });

router.use('/api/auth' , authRouter); 
router.use('/api/apiKey', apiKeyRouter) ;
router.use('/api/algorithm', algoRouter) ;
router.use('/api/jwt', jwtRouter );
router.use('/api/notice', noticeRouter );
router.use('/api/qna', qnaRouter );
router.use('/api/engine', engineRouter );


module.exports = router;