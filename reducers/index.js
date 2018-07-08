const initialState = {
  randomWords: [
    'background',
    'border',
    'clear',
    'cursor',
    'display',
    'flex',
    'font',
    'grid',
    'height',
    'width'
  ],
  game: ''
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      let randoms = Math.floor(Math.random() * (state.randomWords.length-1 - 0) + 0);
      let newGame = state.randomWords[randoms].split('').map((e, i) => {
        if(i == Math.floor(Math.random() * (state.randomWords[randoms].split('').length-1 - 0) + 0)) {
          return '_'
        } else {
          return e
        }
      })
      console.log(newGame)
      return {...state, game: newGame}
    default:
      return {...state}
  }
}

export default rootReducer
