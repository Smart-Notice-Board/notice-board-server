var express = require('express');
var router = express.Router();
var userinfo = require('../models/User')

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send("uname" + req.params.uname)
  res.render('homepage');
});


module.exports = router;
