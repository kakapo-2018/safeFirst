const testEnv = require('./test-environment')
const db = require('../server/db/dbdashboard')

let testDB = null;

beforeEach(() => {
    testDB = testEnv.getTestDb()
    return testEnv.initialise(testDB)
  });
  
  afterEach(() => testEnv.cleanup(testDB));

  test('getHazards returns all hazards', () => {
      const expected = 6
      return db.getHazards(testDB)
      .then(hazards => {
        const actual = hazards.length
        console.log(hazards, actual, expected)
        expect(actual).toBe(expected)
      })
      .catch(err => expect(err).toBeNull)

      
  })

  test('postHazard adds a new hazard', () => {
      const expected = 7
      return db
      .postHazard(
          {
            hazard: 'Electricity',
            risk: 'Slipping or falling',
            control: 'Everyone is responsible to keep the floor tidy with no lose items floating aorund',
            daily: 'true'
          }, testDB)
          .then(hazards => {
              const actual = hazards.length
              expect(actual).toBe(expected)
          })
          .catch(err => expect(err).toBeNull)
   })

   test('the previous test has included Electricity as a new hazard', () => {
    const expected = 'Electricity'
    return db
        .getHazards(testDB)
        .then(hazards => {
            const actual = hazards.hazard
            expect(actual).toBe(expected)
        })
        .catch(err => expect(err).toBeNull)
 })