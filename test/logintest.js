var should =require('chai').should(),
expect=require('chai').expect,
supertest=require('supertest'),
api=supertest('http://localhost:3000');
var profile = {
        username: 'rag',
        password: 'akash'
    };

    var profile1 = {
        username :'suaysh',
        password : 'singh'
    };

describe('login',function(){
    it('should return true',function(done) {

        api.post('/login')
        .send(profile)

        .end(function(err,res){
            //console.log(res.body);
            var token1=res.body.token;
            //console.log(token1);
             describe('noticesupload',function(){
        it('should upload a notice',function(done){
            //console.log(token1);
            api.post('/noticesupload?token='+token1)
            .send({description:"first notice",type:"text",priority:"1",board_name:"sem 4"})
            .end (function(err,res){
            //console.log(res.body);
                expect(res.body.msg).to.equal("Notice uploaded successfully");
                done();
            });
        });
    });

            //expect(res.error).to.not.equal("User not found");
            //console.log(res.body.token);
            expect(res.body.success).to.be.true;
            //console.log(res.body.token);
            //res.should.have.status(200);
            done();
        });
    });

        it('should give unauthorized error',function(done){
            api.post('/login')
            .send(profile1)

            .end(function(err,res){
                expect(res.body.error).to.equal("User not found");
                done();
            });
        });



});

       