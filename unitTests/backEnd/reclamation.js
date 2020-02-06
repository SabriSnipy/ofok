
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server');
let should = chai.should();
var expect = chai.expect;
chai.use(chaiHttp);
module.exports=()=>{
    describe('/RECLAMATION', ()=>{
    it('Should POST a reclamation mail to the snipy tech team', (done)=>{
        let reclamation = 
        {            
            email:"sabri.snipy@gmail.com",
	        subject:"reclamation",
	        description:"test unit is testing codes now"
        }
      chai.request(server)
          .post('/user/reclamation')
          .send(reclamation)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
              
          });
          done()
    })
})
}