const initialState = {
  name: 'Ari',
}


const globalReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_NAME') {
    return {
      ...state,
      name: 'Abdurrahman'
    }
  }
  return state
}

export default globalReducer;