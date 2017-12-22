const initialState = {
  kata: [],
}

const Game = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_KATA':
       return {...state, state.kata = action.payload.data}
    default:
      return state
  }
}

export default Game
