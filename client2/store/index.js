import { createStore, applyMiddleware } from 'redux'
import listReducer from '../reducers'
import thunk from 'redux-thunk'

const middleware = applyMiddleware (thunk)

//STORE
const store = createStore(
  listReducer,
  middleware
)
export default store
