/**
 * Created by raghavrastogi on 07/07/15.
 */

var cfg = require('../config');
var mysql = require('mysql');

var connection = mysql.createConnection(cfg.mysql);

function fetchColleges(cb) {
    var query = "Select * from COLLEGE_DET";

    connection.query(query,function(err,rows){
        if(err){
            console.log("Hi")
            cb(err);
        } else {
            // var user = new User(rows[0]);
            console.log("hi");
            cb(rows);

        }
    });

}


module.exports = {
    fetchCollegeDetails: fetchColleges

}