export const inputUsername = (username) => {
  console.log('actions', username)
  return {
    type: "SET_USERNAME",
    payload: username
  }
}