const initialState = {
  auth: {},
  senators: [],
  user_senators: []
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_USER':
      return payload;
    case 'CLEAR_USER':
      return {};

    // case 'HANDLE_LOGIN': {
    //   return { ...state, auth: action.payload }
    // }
    // case 'HANDLE_LOGOUT': {
    //   return { ...state, auth: {} }
    // }
    // case 'GET_CURRENT_USER': {
    //   return { ...state, auth: action.payload }
    // }
    // case 'SENATORS_ADDED_TO_STATE': {
    //   return { ...state, senators: action.payload }
    // }
    // case 'CREATE_RATING': {
    //   return { ...state, user_senators: action.payload }
    // }
    // case 'FETCH_RATINGS': {
    //   return { ...state, user_senators: action.payload }
    // }

    default:
      return state;
  }
};

export default userReducer;
