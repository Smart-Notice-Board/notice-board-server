
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('createNoticeBoard',{username:req.decoded.username});
});
module.exports = router;