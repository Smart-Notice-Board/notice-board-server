/**
 * Created by raghavrastogi on 07/07/15.
 */
var cfg = require('../config');
var mysql = require('mysql');

var connection = mysql.createConnection(cfg.mysql);



function fetchUser(uname,passw,cb) {
   var query = "Select * from USER where username = ? and password = ?";

    connection.query(query,[uname,passw],function(err,rows){
       if(err){
             cb(err);
       } else {
           cb(rows[0]);

       }
    });

}

function authenticate(){

}


module.exports = {
    getUser: fetchUser

}