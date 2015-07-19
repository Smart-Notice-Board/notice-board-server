/**
 * Created by raghavrastogi on 07/07/15.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/User')
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
router.get('/', function (req, res, next) {
    res.render('index');
});


router.post('/', function (req, res, next) {
    console.log(req.body);
    var uname = req.body.username
    var passw = req.body.password
    crypto.pbkdf2(passw, 'Salt', 100, 30, function (err, key) {
        if (err) {
            console.log(err);
            next(err);
        }
        passw = key.toString('hex');
        User.getUser(uname, passw, function (User, err) {
            if (err) {
                res.json({error: err});
            }
            else{
            //res.redirect('/noticesupload');
                console.log('a',User);
            }

        });
    });
});

module.exports = router;