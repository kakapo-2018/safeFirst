import request from 'superagent'

export function getHazards() {
    console.log('getHazards')

    return request
    .get('/api/dashboard')
    .then(res => {
        const hazards = res.body
        return hazards
    })
    .catch(() => {
        throw Error('You need to implement an API route for /api/dashboard')
    })
}

export function newHazard (hazard, callback)    {
    console.log(hazard)
    request
    .post('api/hsmeeting/hazard')
    .send(hazard)
    .end((err, res) =>   {
        callback(err, res)
    })
}

export function getIncidents() {
    return request
    .get('/api/incidents')
    .then(res => {
        const incidents = res.body
        return incidents
    })
    .catch(() => {
        throw Error('You need to implement an API route for /api/incidents')
    })
}

export function getMinutes() {
    return request
    .get('/api/hsmeetinglist')
    .then(res => {
        const minutes = res.body
        return minutes
    })
    .catch(() => {
        throw Error('You need to implement an API route for /api/hsmeetinglist')
    })
}

export function newIncident (incident, callback) {
    console.log(incident)
    request
    .post('api/incidents')
    .send(incident)
    .end((err, res) => {
        callback(err,res)
    })    
}