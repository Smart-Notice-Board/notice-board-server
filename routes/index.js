var express = require('express');
var router = express.Router();
var userinfo = require('../models/User')

/* GET home page. */
router.get('/user/:uname', function(req, res, next) {
  console.log(req.params.uname);
  var uname= req.params.uname
  userinfo.getUserByUserName(uname,function(userinfo,err){
//console.log(userinfo)
    if(err){
      res.json({er:err});
    }
    else{
      res.json({reult:userinfo});
    }

    });

  //res.send("uname" + req.params.uname)
  //res.render('index', { title: 'Express' });
});


module.exports = router;
