let User = require('../../models/user');
let post = require('../../models/post');
let image= require('../../models/image');
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server');
let should = chai.should();
var expect = chai.expect;
var token='';
var id_offer=''
var id_proposition=''
chai.use(chaiHttp);
module.exports=()=>{
describe('USER', () => {
    before((done)=>{
       User.findOne({ "local.email": "snipytechteam@gmail.com" }, function(err,user){
        if (user) { 
            User.deleteOne({"local.email": "snipytechteam@gmail.com"}, function(err){
                if (err)
                console.log(err)
               
            })
            
            done()
        }
        else done()
       });
        
    })
before((done) => {
        let user = {
            firstName:"Test",
            lastName:"Unit",
            email:"snipytechteam@gmail.com",
            password:"0000",
        }
        chai.request(server)
          .post('/user/signup')
          .send(user)
          .end((err, res) => {
              if (err)
              console.log(err)
                else
                res.should.have.status(200);
                res.body.should.be.a('object');
                token=res.body.token
                done()
          });
        })
      
  before((done)=>{
    let post = {
            
        description:"this is the first post",
        lng:"9.88434207187504",
        lat:"37.11776376956443"
    }
  chai.request(server)
      .post('/user/posts')
      .set('Authorization',token)
      .send(post)
      .end((err, res) => {
          if (err)
          console.log(err)
            else
            res.should.have.status(200);
            res.body.should.be.a('object');
            done()
      });
  })        
  before((done)=>{
              post.POST.remove({}, (err,res) => {
                if (err)
                console.log(err)  
                done();                     
            });    
 
        })
    before((done)=>{
        chai.request(server)
            .post('/user/images')
            .set('Authorization',token)
            .field('Content-Type', 'form-data')
            .field('id_user','5cab4179456b601a148c054c')
            .attach('userImage', './uploads/beautiful.jpg','beautiful.jpg' )
            .end(function (err, res) {
                    if (err) {
                        console.log(err);
                    } else {
                        done();
                    }
                    });
                });
                before((done) => {
                    image.remove({}, (err,res) => {   
                            if(err)
                             console.log(err) 
                             done();                 
                    });    
                  
                });
/************* offers *************/
describe('OFFER',()=>{
     /*
  * Test the /POST route for posting offer
  */
    it('it should POST an offer with all fields required', (done) => {
        let post = {
            
            description:"this is the second post",
            lng:"9.88434207187504",
            lat:"37.11776376956443"
        }
      chai.request(server)
          .post('/user/posts')
          .set('Authorization',token)
          .send(post)
          .end((err, res) => {
              if (err)
              console.log(err)
                else
                res.should.have.status(200);
                res.body.should.be.a('object');
                done()
          });
        });
   /*
  * Test the /PUT route for posting proposition to an offer
  */
        it('it should PUT a comment with all fields required to an offer', (done) => {
            post.POST.find({},function(err,offer){
                if (err)
                console.log(err)
                id_offer=offer[0]._id
           let proposition ={
                _id:id_offer,
                 description:"3ème comment text test dans le 2ème post",
                 id_user:"5cb8543caf551712bc608e7e",
                 firstName:"Tamara",
                 lastName:"King",
                 money:"500"
                }
          chai.request(server)
              .put('/user/posts')
              .set('Authorization',token)
              .send(proposition)
              .end((err, res) => {
                  if (err)
                  console.log(err)
                    else
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done()
              });           
            });       
        });
        /*
  * Test the /GET route for getting all offers of the actual user
  */
 it('it should GET the user offers', (done) => {
    chai.request(server)
    .get('/user/myposts')
    .set('Authorization',token)
    .end((err, res) => {
        if (err)
        console.log(err)
            else{
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(1);
          done();}
    });
     
});
/** get my tracked posts **/

 it('it should GET my tracked offers', (done) => {
    chai.request(server)
        .get('/user/mytrackedposts')
        .set('Authorization', token)
        .end((err, res) => {
            if (err)
            console.log(err)
          else
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(0);
              done();
        });
       
  });
 /** get all the offers **/
 it('it should GET all the offers', (done) => {
    chai.request(server)
        .get('/user/posts')
        .end((err, res) => {
            if (err)
            console.log(err)
          else
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(1);
              done();
        });
       
  });
/******* searching *******/
it('it should GET all the offers matches the word wondered', (done) => {
    chai.request(server)
        .get('/user/search')
        .send({term:"second"})
        .end((err, res) => {
            if (err)
            console.log(err)
              else
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(1);
              done();
        });
       
  });

  it ('it should snipe comment before generate a contract between two users', (done) => {

        post.POST.find({},function(err,offer){
        if (err)
        console.log(err)
        else{
        id_offer=offer[0]._id
        id_proposition=offer[0].comments[0]._id
        
    post.POST.updateOne({'comments._id':id_proposition}, 
        {'$set': {
        'comments.$.isSniped': true,
        }},
        function(err,model) {
            if(err)
            console.log(err)
        done()
        })
    }
})
  })
  it ('it should generate a contract between two users', (done) => {
       
       let body = {            
           
        id_user:"5cab4738456b601a148c054d",
        id_post:id_offer,
        societyName:"Sabri Society Test",
        societyActivities:"Développement",
        societyLocation:"Sahloul",
        societyRC:"2245865",
        employeeNationality:"Tunisien",
        employeeSituation:"célibataire",
        employeeBirthPlace:"Kairouan",
        employeeBirthDate:"10-10-1992",
        employeeCIN:"11868694",
        employeeCINDate:"15-05-2015",
        employeeAdress:"Sahloul, Sousse",  
        contactDuration:"5 ans", 
        contractStart:"14-03-2019", 
        contractEnd:"14-03-2024",
        employeeRemunerationWord:"mille huit cents dinars", 
        employeeRemunerationNumber:"1800"
    
}
chai.request(server)
  .post('/user/profil/contract')
  .set('Authorization',token)
  .send(body)
  .end((err, res) => {
      if (err){
        console.log(err)

      }
      
        else{
        res.should.have.status(200);
        res.body.should.be.a('object');
      
    }
  });
 
  done()
});    

 
})

/** IMAGES **/
describe('IMAGE', ()=>{

        it('Should upload an image into uploads folder', (done)=>{
            chai.request(server)
                .post('/user/image')        
                .set('Authorization',token)
                .field('Content-Type', 'form-data')
                .attach('userImage', './uploads/beautiful.jpg','beautiful.jpg' )
                .end(function (err, res) {
                if (err) {
                    console.log(err);
                } else expect(res.status).to.equal(200);
                done();
        });
    });
    it('Should GET all images stored by a specified user', (done)=>{
        chai.request(server)
            .get('/user/image')
            .set('Authorization',token)
            .end(function (err, res) {
                    if (err) {
                        console.log(err);
                    } else {
                        expect(res.status).to.equal(200);
                        res.body.should.be.a('array');
                        res.body.length.should.be.eql(1);
                        done();
                    }
                   
                    });
    });

 
            it('Should GET all images stored by all users', (done)=>{
                chai.request(server)
                    .get('/user/images')
                    .end(function (err, res) {
                            if (err) {
                                console.log(err);
                            } else {
                                expect(res.status).to.equal(200);
                                res.body.should.be.a('array');
                                res.body.length.should.be.eql(1);
                                done();
                            }
                         
                            });
            });

          
    });

   
})

}
