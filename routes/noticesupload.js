/**
 * Created by raghavrastogi on 09/07/15.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var moment = require('moment');
var path = require('path');
var notice = require('../models/notice');

router.get('/', function (req, res, next) {
    res.render('noticeupload');

});

router.post('/', function (req, res, next) {
    // console.log(req.body);
    if (req.query.token || req.headers['x-access-token']) {

        //uploading images or videos
        if (req.body.type == "image" || req.body.type == "video") {
            console.log("HI");
            old_path = "public/uploads/" + req.files.fil.name;
            new_path = "public/uploads/" + req.body.type + "/" + req.files.fil.originalname;
            console.log(new_path);
            fs.rename(old_path, new_path, function (err) {
                if (err) {
                    res.json({err: err});
                }
                else {
                    notice.storeNotices(req, function (err, notice) {
                        if (err) {
                            res.json({msg: err});
                        }
                        else {
                            //console.log("Notice", notice)
                            res.json({msg: "Notice saved successfully"});
                        }
                    });
                }
            });
        }

        else {
            //uploading only text notices
            if (req.body.type == "text") {
                notice.storeNotices(req, function (err, notice) {
                    if (err) {
                        res.json({err: err});
                    }
                    else {
                        res.json({msg: "Text notice uploaded successfully"});
                    }
                });
            }
        }


    }
    else {
        res.json({msg: "token not valid or expired"});
    }

});

module.exports = router;