import _ from 'lodash'

const initialState = {
  randomWords: [],
  usedWords: [],
  turnLeft: 5,
  gameOver: false
}

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RANDOM_WORDS':
      const loadRandomWords = state.randomWords.concat(action.payload.randomWords)
      return { ...state, randomWords: loadRandomWords }
    
    case 'ADD_INPUT_WORDS':      
      let newUsed = []
      newUsed.push(action.payload.word)

      let newTurn = state.turnLeft--
      console.log(`-----------TURN LEFT ${action.payload.word}`)

      const newUsedWords = state.usedWords.concat(newUsed)
      return { ...state, usedWords: newUsedWords, turnLeft: state.turnLeft - 1 }

    default:
      return state
  }
}