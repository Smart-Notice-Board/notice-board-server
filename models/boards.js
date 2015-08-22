var cfg = require('../config');
var mysql = require('mysql');

var connection = mysql.createConnection(cfg.mysql);

function fetchBoardName(cb) {
    var query = "Select board_name from COLLEGE_DET";

    connection.query(query, function (err, rows) {
        if (err) {
            console.log("Hi");
            cb(err, null);
        } else {
            board_list =[];
            i=0;
            while(i<rows.length){
                board_list.push(rows[i].board_name);
                i++;
            }
            cb(null, board_list);

        }
    });

}


module.exports = {
    fetchBoardName: fetchBoardName
}

