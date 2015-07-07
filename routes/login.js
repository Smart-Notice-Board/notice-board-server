/**
 * Created by raghavrastogi on 07/07/15.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('login');
});


router.post('/', function (req, res, next) {

})

module.exports = router;