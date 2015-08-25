/**
 * Created by raghavrastogi on 07/07/15.
 */
var express = require('express');
var router = express.Router();
var boardinfo = require('../models/boards');
var _ = require('lodash');

router.get('/',function(req,res,next){
    //console.log(req.body)
    boardinfo.fetchBoardName(function(err,boardinfo) {
        if (err) {
            res.json({error: err});
        }
        else {

            res.json({boardInfo:boardinfo});
        }

    });

});
module.exports = router;