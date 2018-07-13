import { createStore } from 'redux'
import reducer from './WordsReducer'

const store = createStore(reducer)
export default store
