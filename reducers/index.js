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
  ]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return state
    default:
      return state
  }
}

export default rootReducer
