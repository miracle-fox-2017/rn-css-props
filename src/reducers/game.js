const initialState = {
  letter_used: [],
  turn_left: [],
  gamestatus: '',
  words: ''
}
export const gameOn = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_WORDS':
      return {...state, word: action.word}
    default:
      return state
  }
}