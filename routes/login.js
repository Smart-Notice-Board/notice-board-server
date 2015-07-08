/**
 * Created by raghavrastogi on 07/07/15.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/User')
var crypto = require('crypto');
router.get('/', function (req, res, next) {
    res.render('login');
});


router.post('/login', function (req, res, next) {
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
            else {
                res.json({result: User});
            }

        });
    });
});

module.exports = router;