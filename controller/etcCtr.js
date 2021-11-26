const Banner = require("../model/mainbanner");


const engineCtr = {
  bannerList : async (req,res) =>{
    res.status(200).json({
        status: 200,
        result: true,
        msg: "banner list success",
        data : 'https://tmcproject.s3.ap-northeast-2.amazonaws.com/banners/tmc+banner.png',
    })
  },
};

module.exports = engineCtr;
