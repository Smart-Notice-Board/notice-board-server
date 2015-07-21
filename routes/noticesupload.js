/**
 * Created by raghavrastogi on 09/07/15.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var moment = require('moment');
var path = require('path');
var notice = require('../models/notice');

/*router.get('/',function(req,res,next){
	console.log("hi",req.decoded);
	res.render('noticeupload');

});*/

router.post('/',function (req,res,next) {


	if(req.query.token){
		old_path = "public/uploads/"+req.files.fil.name;

		//uploading images or videos
		if(req.body.type == "image" || req.body.type == "video") {
			new_path = "public/uploads/" + req.body.type +"/"+ req.files.fil.originalname;
			fs.rename(old_path,new_path,function(err){
				if(err){
					res.json({err:err});
				}
				else{
					console.log("hell yeah");
					notice.storeNotices(req,function(err,notice){
						if(err){
							res.json({msg:err});
						}
						else{
							res.json({msg:"Notice saved successfully"});
						}
					});
				}
			});
		}

		else{
			//uploading only text notices
			notice.storeNotices(req,function(err,notice){
				if(err){
					res.json({err:err});
				}
				else if(notice){
					res.json({msg:"Notice saved successfully"});
				}
				else{
					res.json({msg:"Something wrong happend"});
				}
			});
		}


	}

});

module.exports = router;