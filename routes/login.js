/**
 * Created by raghavrastogi on 07/07/15.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/User')
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
router.get('/', function (req, res, next) {
    res.render('login');
});


router.post('/', function (req, res, next) {
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
            if(!User) {
                    res.json({ success: false, message: 'Authentication failed. User not found.' });
            }
            else{
                 var token = jwt.sign(User, "RAGHAV", {
                    expiresInMinutes: 1440 // expires in 24 hours
                });
                        res.redirect('/noticesupload'+'?token='+token);

            }

        });
    });
});

module.exports = router;