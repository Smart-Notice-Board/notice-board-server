var cfg = require('../config');
var mysql = require('mysql');
var _ = require('lodash');

var connection = mysql.createConnection(cfg.mysql);

function fetchBoardName(cb) {
    cfg.pool.getConnection(function(err,connection) {
        if (err) {
            connection.release();
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        }
        console.log('connected as id ' + connection.threadId);
        var query = "Select board_name from COLLEGE_DET";

        connection.query(query, function (err, rows) {
            connection.release();
            if (err) {
                cb(err, null);
            }
            else {
                board_list = [];
                i = 0;
                while (i < rows.length) {
                    board_list.push(rows[i].board_name);
                    i++;
                }
                cb(null, _.uniq(board_list));
            }
        });
        connection.on('error', function(err) {
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;
        });
    });
}

function storeBoardName(param,cb) {
    var query = "Insert into COLLEGE_DET values (?,?,?,?) ";
    connection.query(query, [param.decoded.CollegeName, param.decoded.department, '', param.body.board_name], function (err, rows) {
        if (err) {
            console.log("ERR",err);
            cb(err, null);
        }
        else {
            cb(null, rows);
        }

    });
}


module.exports = {
    fetchBoardName: fetchBoardName,
    storeBoardName: storeBoardName
}

