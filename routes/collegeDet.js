/**
 * Created by raghavrastogi on 07/07/15.
 */
var express = require('express');
var router = express.Router();
var collegeinfo = require('../models/colleges');
var _ = require('lodash');


router.get('/',function(req,res,next){
    res.render('college');
});

router.get('/college',function(req,res,next){
    collegeinfo.fetchCollegeDetails(function(collegeinfo,err){
       if(err){
           res.json({error:err});
       }
        else{
           var d=[]
           //console.log(collegeinfo);
           for(var i=0;i<collegeinfo.length;i++) {
               d[i]=collegeinfo[i]['college_name'];

           }
           z= _.uniq(d);
           var m=[];
           for(var i=0;i< z.length;i++){
               var departments=[]
               for(var j=0;j<collegeinfo.length;j++){
                  var semester=[]
                   if(z[i] == collegeinfo[j]['college_name']){
                       semester.push({name:collegeinfo[j]['semester']});

                       console.log(collegeinfo[j]['department']);
                            departments.push({name:collegeinfo[j]['department'],
                                                sem :semester});
                   }
                   }
               m.push({name:z[i],
                       department:departments})
           }
           res.json({result:m});
       }
    });
});
module.exports = router;