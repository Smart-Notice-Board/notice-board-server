/**
 * Created by raghavrastogi on 07/07/15.
 */
var cfg = require('../config');
var mysql = require('mysql');

var connection = mysql.createConnection(cfg.mysql);

/**
 *
 * @param row
 * if row is array:
 * An array containing elements
 * populated from db
 * 0 -> uid
 * 1 -> CollegeName
 * 2 -> Username
 * 3 ->Password
 * 4 -> department
 * 5 -> user_priority
 *
 * else row is an object
 */
/*var User = function (row) {
    if (Array.isArray(row) === true) {
        this.uid = row[0];
        this.collegeName = row[1];
        this.department = row[2];
        this.user_priority = row[3];
        this.username = row[4];
    }

    else if(typeof(row) === 'object') {
        *//**
         * hack code
         * @type {Array}
         *//*
        var keys = Object.keys(row);

        keys.forEach(function (key) {
            this[key] = row[key];
        });
    }
};*/


function fetchUser(uname,cb) {
   var query = "Select * from USER where username = ?";

    connection.query(query,[uname],function(err,rows){
       if(err){
           console.log("Hi")
             cb(err);
       } else {
          // var user = new User(rows[0]);
           console.log("hi");
           cb(rows[0]);

       }
    });

    /*var rows;

    var u = new user();

    return u;*/

}


module.exports = {
    getUserByUserName: fetchUser

}