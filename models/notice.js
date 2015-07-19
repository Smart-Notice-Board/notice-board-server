/**
 * Created by raghavrastogi on 08/07/15.
 */
var cfg = require('../config');
var mysql = require('mysql');

var connection = mysql.createConnection(cfg.mysql);

function fetchNotices(param,cb){

    var query = "Select * from NOTICE where college_name = ? and department =? and Semester = ?";

    connection.query(query,[param.college,param.department,param.semester],function(err,rows){
        if(err){
            cb(err,null);
        }
        else{
            cb(null,rows);
        }
    });

}
function storeNotices(param,cb){


}
module.exports = {
    fetchAllNotices:fetchNotices
    //storeNotices:storeNotices

}