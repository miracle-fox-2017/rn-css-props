
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import player from '../reducer'

const store = createStore(player)

export default store