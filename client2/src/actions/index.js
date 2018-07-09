export const get_user_kata = (data) => {
  return {
    type: 'GET_KATA',
    payload: {
      data
    }
  }
}
