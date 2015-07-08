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
    console.log(req.body)
    collegeinfo.fetchCollegeDetails(function(collegeinfo,err){
       if(err){
           res.json({error:err});
       }
        else {
           var d = []
           for (var i = 0; i < collegeinfo.length; i++) {
               d[i] = collegeinfo[i]['college_name'];
           }
           z = _.uniq(d);
           var dep = [];
           for (var i = 0; i < z.length; i++) {
               for (var j = 0; j < collegeinfo.length; j++) {
                   if (z[i] == collegeinfo[j]['college_name']) {
                       dep.push(collegeinfo[j]['department']);
                   }
               }
           }
           v = _.uniq(dep);
           var m = [];
           for (var i = 0; i < z.length; i++) {
               var departments = []
               for (var t = 0; t < v.length; t++) {
                   var semester = [];
                   for (var j = 0; j < collegeinfo.length; j++) {
                       if ((z[i] === collegeinfo[j]['college_name']) && (v[t] === collegeinfo[j]['department'])) {
                           semester.push({name: collegeinfo[j]['semester']});

                       }
                   }
                   var dept = {
                       name: v[t],//collegeinfo[j]['department'],
                       sem: semester
                   }

                   if(dept.sem.length !== 0) {
                       departments.push(dept);
                   }


               }
               m.push({
                   name: z[i],
                   department: departments
               });
           }
               res.json({result: m});
           }
    });
});
module.exports = router;