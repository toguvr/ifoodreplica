const initialState = {
  loginError: ''
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ERROR_MESSAGE':
      return { ...state, loginError: action.payload.message };
    case 'CLEAR_ERROR_MESSAGE':
      return { ...state, loginError: undefined };
    default:
      return state;
  }
};

export default auth;
