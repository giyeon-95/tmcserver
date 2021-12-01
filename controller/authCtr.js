const User = require("../model/auth");
const ApiKey = require("../model/apiKey");
const Algorithm = require("../model/algorithm");
const bcrypt = require("bcrypt");
const secretKey = require("../config/secretKey.json");
const jwt = require("jsonwebtoken");

const authCtr = {
  register: async (req, res) => {
    const { useremail, password } = req.body;

    const exist = await User.findOne({ useremail: useremail });
    if (exist) {
      res.json({
        status: 504,
        result: false,
        msg: "already exist",
      });
      return;
    }

    const user = new User({
      useremail: useremail,
      grade: "basic",
      balance: 0,
      connected: false,
      class: "user",
    });

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();

    const apiKey = new ApiKey({
      useremail: useremail,
      bithumbC: "",
      bithumbS: "",
      upbitC: "",
      upbitS: "",
      coinoneC: "",
      coinoneS: "",
      korbitC: "",
      korbitS: "",
      binanceC: "",
      binanceS: "",
      huobiC: "",
      huobiS: "",
      bitfinexC: "",
      bitfinexS: "",
      bitflyerC: "",
      bitflyerS: "",
    });
    await apiKey.save();

    const algorithm = new Algorithm({
      useremail: useremail,
      data: "",
    });
    await algorithm.save();

    const data = user.toJSON();
    delete data.password;

    const token = jwt.sign(
      {
        _id: data._id,
        useremail: data.useremail,
      },
      secretKey.key,
      {
        expiresIn: "7d",
      }
    );
    res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      })
      .json({
        status: 200,
        result: true,
        msg: "register successed",
        token: token,
      });
  },
  login: async (req, res) => {
    const { useremail, password } = req.body;

    const user = await User.findOne({ useremail: useremail });
    if (!user) {
      res.json({
        status: 500,
        result: false,
        msg: "email error",
      });
      return;
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      res.json({
        status: 501,
        result: false,
        msg: "password error",
      });
      return;
    }
    const data = user.toJSON();

    delete data.password;

    const token = jwt.sign(
      {
        _id: data._id,
        useremail: data.useremail,
      },
      secretKey.key,
      {
        expiresIn: "7d",
      }
    );

    const keyExist = await ApiKey.findOne({ useremail: useremail });
    const algoExist = await Algorithm.findOne({ useremail: useremail });

    res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      })
      .json({
        status: 200,
        result: true,
        token: token,
        class: user.class,
        grade: user.grade,
        connected: user.connected,
        balance: user.balance,
        keys: keyExist,
        data: algoExist,
        version: "v2.1.0",
      });
  },
  logout: async (req, res) => {
    const token = req.headers.access_token;

    if (!token) {
      res.status(400).json({
        status: 400,
        result: false,
        msg: "token error",
      });
      return;
    }

    window.localStorage.removeItem("access_token");

    // localStorage.removeItem('access_token');

    res
      .cookie("access_token", "", {
        httpOnly: true,
        maxAge: 0,
      })
      .json({
        status: "200",
        msg: "ok",
      });
  },
  changePW: async (req, res, next) => {
    const { password } = req.body;

    const hashedInputPassword = await bcrypt.hash(password, 10);
    const token = req.headers.access_token;

    if (!token) {
      res.status(400).json({
        status: 400,
        result: false,
        msg: "token error",
      });
      return;
    } else {
      try {
        const decoded = jwt.verify(token, "tmctmc");

        const update = { password: hashedInputPassword };

        await User.findOneAndUpdate({ useremail: decoded.useremail }, update);
        res.status(200).json({
          status: 200,
          result: true,
          msg: "change pw success",
        });
      } catch (e) {
        res.status(500).send("error!");
      }
    }
  },
  mypage: async (req, res, next) => {
    const token = req.headers.access_token;

    try {
      const decoded = jwt.verify(token, "tmctmc");
      res.send(decoded.useremail);
    } catch (e) {
      res.status(500).send("jwt error!");
    }
  },
  userInfo: async (req, res, next) => {
    const token = req.headers.access_token;
    let useremail1 = "";

    if (!token) {
      res.status(400).json({
        status: 400,
        result: false,
        msg: "token error",
      });
      return;
    }

    try {
      const decoded = jwt.verify(token, "tmctmc");
      useremail1 = decoded.useremail;
    } catch (e) {
      console.log(e);
    }

    const user = await User.findOne({ useremail: useremail1 });
    const keyExist = await ApiKey.findOne({ useremail: useremail1 });
    const algoExist = await Algorithm.findOne({ useremail: useremail1 });

    if (!user) {
      res.json({
        status: 504,
        result: false,
        msg: "no user",
      });
      return;
    } else {
      res.status(200).json({
        status: 200,
        result: true,
        useremail: useremail1,
        grade: user.grade,
        connected: user.connected,
        balance: user.balance,
        keys: keyExist,
        data: algoExist,
        class: user.class,
      });
    }
  },
  grading: async (req, res, next) => {
    const token = req.headers.access_token;
    let useremail1 = "";

    const { balance } = req.body;

    if (!token) {
      res.status(400).json({
        status: 400,
        result: false,
        msg: "token error",
      });
      return;
    }

    try {
      const decoded = jwt.verify(token, "tmctmc");
      useremail1 = decoded.useremail;
    } catch (e) {
      console.log(e);
    }

    const user = await User.findOne({ useremail: useremail1 });
    let grading = user.grade;

    if (!user) {
      res.json({
        status: 504,
        result: false,
        msg: "no user",
      });
      return;
    } else {
      if (balance > 500) {
        grading = "gold";
      } else if (balance > 300) {
        grading = "silver";
      } else if (balance > 100) {
        grading = "bronze";
      } else if (balance >= 0) {
        grading = "basic";
      }

      const update = { balance: balance, grade: grading, connected: true };
      updateUser = await User.findOneAndUpdate(
        { useremail: useremail1 },
        update
      );
      res.status(200).json({
        status: 200,
        result: true,
        usereamil: useremail1,
        grade: grading,
        balance: balance,
        connected: true,
      });

      // await User.findOneAndUpdate({ useremail: useremail1 }, update).then((_)=>{
      //   res
      //   .status(200)
      //   .json({
      //     status: 200,
      //     result: true,
      //     usereamil : useremail1 ,
      //     grade : user.grade,
      //     balance : user.balance,
      //     connected : true,
      //   });
      // });
    }
  },
};

module.exports = authCtr;
