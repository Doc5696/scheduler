import { combineReducers } from 'redux'

import appReducer from './App/services/reducer'


export default combineReducers({
  app: appReducer
})
