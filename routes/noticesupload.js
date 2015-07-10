/**
 * Created by raghavrastogi on 09/07/15.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var moment = require('moment');

var notice = require('../models/notice');

router.get('/',function(req,res,next){
	if (req.cookies.loggedIn === true) {
		res.render('noticeupload');
	} else {
		res.redirect('/login');
	}
    
});

router.post('/', function (req,res,next) {
console.log(req.body);

	if (req.cookies.loggedIn === true) {
		console.log(req.files);
    	oldPath = "public/uploads";
		if(req.body.type === 'image'){
			newPath = "public/uploads/images"
			fs.rename(oldPath,newPath,function(err,f){
			    if(err){

			    }
			});
		}
	} else {
		res.redirect('/login');
	}


});

module.exports =router;




