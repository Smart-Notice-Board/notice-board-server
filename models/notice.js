/**
 * Created by raghavrastogi on 08/07/15.
 */
var cfg = require('../config');
var mysql = require('mysql');

var connection = mysql.createConnection(cfg.mysql);

function fetchNotices(college,department,semester,cb){

    var query = "Select * from NOTICE where college_name = ? and department =? and Semester = ? ";

    connection.query(query,[college,department,semester],function(err,rows){
        if(err){
            cb(err);
        }
        else{
            cb(rows);
        }
    });

}

module.exports = {
    fetchAllNotices:fetchNotices
}