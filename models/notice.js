/**
 * Created by raghavrastogi on 08/07/15.
 */
var cfg = require('../config');
var mysql = require('mysql');
var moment = require('moment');
var fs = require('fs');
var mm = require('musicmetadata');
var connection = mysql.createConnection(cfg.mysql);


function fetchNotices(param, cb) {
    cfg.pool.getConnection(function(err,connection) {
        if (err) {
            connection.release();
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        }
        console.log('connected as id ' + connection.threadId);
        var query = "Select * from NOTICE where board_name = ?";

        connection.query(query, [param.board_name], function (err, rows) {
            connection.release();
            if (err) {
                cb(err, null);
            }
            else {
                cb(null, rows);
            }
        });
        connection.on('error', function (err) {
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        });
    });

}


function storeNotices(param,cb) {
    //console.log(param.body);
    cfg.pool.getConnection(function(err,connection) {
        if (err) {
            connection.release();
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        }
        console.log('connected as id ' + connection.threadId);
        var query = "Insert into NOTICE values (?,?,?,?,?,?,?,?,?,?,?,?) ";
        //var query2 = "Insert into COLLEGE_DET values (?,?,?,?) ";

        var start_time = moment(param.body.startdate + " " + param.body.stime).format("DD/MM/YYYY HH:mm");
        var end_time = moment(param.body.enddate + " " + param.body.etime).format("DD/MM/YYYY HH:mm");


        if (param.body.type == "image" || param.body.type == "video") {
            var val = ['', param.body.description, param.body.type, param.body.priority, param.decoded.username, param.body.board_name, param.files.fil.originalname, param.decoded.CollegeName, param.decoded.department, start_time, end_time, ''];
        }
        else {
            //console.log("enter");
            var val = ['', param.body.description, param.body.type, param.body.priority, param.decoded.username, param.body.board_name, 'no file', param.decoded.CollegeName, param.decoded.department, start_time, end_time, param.body.notice_content];

        }


        connection.query(query, val, function (err, rows) {
            connection.release();
            if (err) {
                console.log("err")
                cb(err, null);
            }
            else {
                console.log("OK");
                cb(null, rows);
            }
        });
        connection.on('error', function (err) {
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        });

    });

}

module.exports = {
    fetchAllNotices: fetchNotices,
    storeNotices: storeNotices

}