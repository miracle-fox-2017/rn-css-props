export const ADD_PLAYER = 'ADD_PLAYER'

export function addNewUser (username) {
  console.log('------actions', username)
  return {
    type: ADD_PLAYER,
    payload: username
  }
}
