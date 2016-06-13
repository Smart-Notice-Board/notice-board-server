var express = require('express');
var router = express.Router();
var boards = require('../models/boards');

router.get('/', function (req, res, next) {
    res.render('createNoticeBoard', {username: req.decoded.username});
});

router.post('/', function (req, res, next) {

    if (req.query.token || req.headers['x-access-token']) {
        boards.storeBoardName(req, function (err, boards) {
            if (err) {
                res.json({msg: err});
            }
            else {
                res.json({msg: "Notice board created successfully"});
            }
        });
    }
    else {
        res.json({msg: "Token invalid or expires"});
    }
});
module.exports = router;