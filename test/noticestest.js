var should =require('chai').should(),
expect=require('chai').expect,
supertest=require('supertest'),
api=supertest('http://localhost:3000');
var cfg = require('../config')
var mysql = require('mysql');
var notice = require('../models/notice');


describe('notice',function(){

before(function(done){
	var connection = mysql.createConnection(cfg.mysql);
	done();
});
it('should fetch the notices from database',function(done){

api.post('/notices')
  .send({board_name:"Sem 4"})
  .end(function(err,res){
  //console.log(res.body)
  expect(res.status).to.equal(200);
  expect(res.body.result).to.not.eql([]);	
  	done();
  });
});
});