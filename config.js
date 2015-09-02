/**
 * Created by raghavrastogi on 07/07/15.
 */
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 100,
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "digitalnoticeboard"

});
module.exports = {
    pool:pool,
    mysql: {
        host: "localhost",
        port: 8889,
        user: "root",
        password: "root",
        database: "digitalnoticeboard"
    },
    'secret': 'RAGHAV'
    /*mysql: {
        host: "sql6.freemysqlhosting.net",
        port: 3306,
        user: "sql688441",
        password: "iP3!gL1*",
        database: "sql688441"
    },
    'secret': 'RAGHAV'*/

};
