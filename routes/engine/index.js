const express = require("express");
const engineCtr = require("../../controller/engineCtr");
const router = express.Router();
const multer = require("multer");
var multerS3 = require("multer-s3");
const path = require ('path');
const AWS = require('aws-sdk');
const hash = require('object-hash');

const bucket = 'tmcproject' ;

const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    accessKeyId: 'AKIASVHJLVHPCJAGV76M',
    secretAccessKey: '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',
    region : 'ap-northeast-2'
});

const upload = multer({
    limits: { fieldNameSize: 500, fileSize: 500000000 },
    storage: multerS3({
      s3: s3,
      bucket: bucket,
      acl: 'public-read',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      cacheControl: 'max-age=31536000',
      key: function (req, file, cb) {
        const extname = path.extname(file.originalname);
        const filename = file.originalname;
        const sorceFilename = `files/${filename}${extname}`;
        cb(null, sorceFilename);
      },
    }),
  });

router.get("/", engineCtr.engineList);
  
router.post("/create", upload.single('app'), engineCtr.createEngine);

module.exports = router;
