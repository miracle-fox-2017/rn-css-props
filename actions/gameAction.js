
export const fetchRandomWords = (randomWords) => {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_RANDOM_WORDS',
      payload: {
        randomWords: randomWords,
      }
    })
  }
}


export const addInputWord = (word) => {
  return (dispatch) => {
    dispatch({
      type: 'ADD_INPUT_WORDS',
      payload: {
        word: word,
      }
    })
  }
}