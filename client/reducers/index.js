import {createStore, combineReducers} from 'redux'

import auth from './auth'
import foundPets from './foundPets'
import lostPets from './lostPets'

export default createStore(
  combineReducers({
  auth,
  foundPets,
  lostPets
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
