const request = require('supertest')
const server = require('../server/server')
const db = require('../server/db/dbdashboard')
const sinon = require('sinon')

test('test setup working', function () {
    expect(true).toBeTruthy()
  })

  test('GET /api/dashboard', () => {
    var hazards = sinon.stub(db, 'getHazards')


    
    
    
    
    
    
    
    
  //   return request(server)
  //     .get('/api/dashboard')
  //     .expect(200)
  //     // .end(function(err,res){
  //     //   if (err) throw err;
  //     // })
  // });