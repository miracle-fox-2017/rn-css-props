import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer/s'

let middleware = applyMiddleware(thunk, logger)

let store = createStore(reducer, middleware)