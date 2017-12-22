const wordGame = {
  players: [],
  words: []
}

const playerReducer = (state = wordGame, actions) => {
  switch (actions.type) {
    case 'SET_USERNAME':
      return state.players.concat(actions.payload)
    case 'SET_WORDS':
      return state.words.concat(actions.payload)
    default:
      return state
  }
}

export default playerReducer