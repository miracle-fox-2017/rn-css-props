export const saveWords = words => {
  return {
    type: 'save_words',
    payload: {
      words
    }
  }
}
