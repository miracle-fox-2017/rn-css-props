const players = []

const playerReducer = (state = players, actions) => {
  switch (actions.type) {
    case 'SET_USERNAME':
      return players.concat(actions.payload)
    default:
      return state
  }
}

export default playerReducer