import db from '../scriptFirebase'

export const inputUsername = (username) => {
  console.log('actions', username)
  return {
    type: "SET_USERNAME",
    payload: username
  }
}

export const setWords = (words) => {
  return {
    type: 'SET_WORDS',
    payload: words
  }
}

export const getWords = () => {
  return  (dispatch) => {
    db.ref().child('/words').once('value')
    .then(snapshot => {
      let words = []
      snapshot.forEach((a)=> {
        let kata = a.val()
        words.push(kata)
      })
      dispatch(setWords(words))
    })
  }
}