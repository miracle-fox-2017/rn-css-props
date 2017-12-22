const initialState = {
  randomWords: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'save_words':
      let words = action.payload
      return words
    default:
      return state
  }
}

export default reducer
