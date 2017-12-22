import _ from 'lodash'

const initialState = {
  randomWords: [],
  usedWords: []
}

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RANDOM_WORDS':
      const loadRandomWords = state.randomWords.concat(action.payload.randomWords)
      return { ...state, randomWords: loadRandomWords }
    
    case 'ADD_INPUT_WORDS':
      /* const loadNewsList = state.newsList.concat(action.payload.newsList)
      return { ...state, newsList: loadNewsList } */
      return state;

    /* case 'UPDATE_ARTICLE':
      const payload = action.payload.article
      const updatedArticles = [];

      Array.from(state.newsList).map(article => {
        if (article.id === payload.id) {
          article.title = payload.title
          article.content = payload.content
        }

        updatedArticles.push(article)
      })

      return { ...state, newsList: updatedArticles }

    case 'DELETE_ARTICLE': */
      const filteredArticles = _.filter(state.newsList, (article) => article.id !== id) 

      return { ...state, newsList: filteredArticles }

    default:
      return state
  }
}