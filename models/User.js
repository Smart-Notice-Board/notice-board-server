/**
 * Created by raghavrastogi on 07/07/15.
 */
var cfg = require('../config');
var mysql = require('mysql');

var connection = mysql.createConnection(cfg.mysql);



function fetchUser(uname,cb) {
   var query = "Select * from USER where username = ?";

    connection.query(query,[uname],function(err,rows){
       if(err){
             cb(err);
       } else {
           cb(rows[0]);

       }
    });

}


module.exports = {
    getUserByUserName: fetchUser

}