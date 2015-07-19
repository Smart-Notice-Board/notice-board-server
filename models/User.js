/**
 * Created by raghavrastogi on 07/07/15.
 */
var cfg = require('../config');
var mysql = require('mysql');

var connection = mysql.createConnection(cfg.mysql);



function fetchUser(uname,passw,cb) {
   var query = "Select * from USER where username = ? and password = ?";

    connection.query(query,[uname,passw],function(err,rows){
       if(err){//console.log("feew");
             cb(err,null);
       } else if(!rows[0]) {
           cb("User not found",null);
       }
        else{
           //console.log("frfrrifjr");
           cb(null,rows[0]);
       }
    });

}


function insToken(token,cb){
    var query = "Update USER set token = ?";

    connection.query(query,[token],function(err,rows){
        if(err){
            cb(err);
        } else {
            cb(rows[0]);

        }
    });
}

module.exports = {
    getUser: fetchUser
   // insertToken:insToken

}