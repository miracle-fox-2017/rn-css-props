export const getWord = () => {
  const randomWords = [
    'background',
    'border',
    'clear',
    'display',
    'flex',
    'font',
    'grid',
    'height',
    'width'
  ]
  const number = Math.floor((Math.random()*9))
  console.log(randomWords[number])
  return {
    type: 'GET_WORDS',
    word: randomWords[number]
  }
}