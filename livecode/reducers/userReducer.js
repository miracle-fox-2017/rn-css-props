let initialState = {
  username: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'get_user':
      return { ...state, username: action.payload }
    default:
      return state
  }
}

export default userReducer
