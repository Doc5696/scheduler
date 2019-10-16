import { createStore } from 'redux'

import rootReducer from './reducers'

const initStore = (initialSate = {}) => createStore(rootReducer, initialSate)

export default initStore
