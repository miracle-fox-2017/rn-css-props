import { ADD_PLAYER } from '../actions'

const initialState = {
  username: '',
  libGuest: 'font'
}

export function guestCssGame( state = initialState, action ) {
  switch (action.type) {
    case 'ADD_PLAYER':
    return {
      ...state,
      username: action.payload
    }
    default:
      return state
  }
}
