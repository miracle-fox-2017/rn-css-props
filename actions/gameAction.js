
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