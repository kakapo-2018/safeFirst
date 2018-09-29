import request from 'superagent'

export function getHazards() {
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
