import request from 'superagent'

import { get } from './localstorage'
import { isAuthenticated } from './auth'

const baseURL = '/api/'

export default function consume(method = 'get', endpoint, data = {}) {
  const dataMethod = method.toLowerCase() === 'get' && 'query' || 'send'
  const token = get('token')
  const headers = {
    Accept: 'application/json'
  }
  if(isAuthenticated()) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return request[method](baseURL + endpoint)
    .set(headers)[dataMethod](data)
    .then((res) => {
      return res
    })
    .catch(err => {
      throw err
    })
}

export function addLost (lostPet, callback) {
  request
  .post('/api/lost')
  .send(lostPet)
  .end((err, res) => {
    callback(err, res)
  })
}


export function addFound (foundPet, callback) {
  request
  .post('/api/found')
  .send(foundPet)
  .end((err, res) => {
    callback(err, res)
  })
}