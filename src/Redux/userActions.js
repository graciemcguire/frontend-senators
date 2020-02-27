import API from '../API';

const setUserAction = user => ({
  type: 'SET_USER',
  payload: user
});

const clearUserAction = user => ({
  type: 'CLEAR_USER'
});

export const loginFetch = user => dispatch => {
  return fetch(API.LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(resp => resp.json())
    .then(data => {
      localStorage.token = data.jwt;
      dispatch(setUserAction(data.user));
    });
};

export const signUpFetch = user => dispatch => {
  return fetch(API.USERS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(resp => resp.json())
    .then(data => {
      dispatch(setUserAction(data.user));
      localStorage.setItem('token', data.jwt);
    });
};

export const fetchingCurrentUser = () => dispatch => {
  return fetch(API.PERSIST_URL, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.token}`
    }
  })
    .then(resp => resp.json())
    .then(user => {
      dispatch(setUserAction(user));
    })
    .catch(console.error);
};

///// BREAK POINT

//// EXPORT

export default {
  loginFetch,
  signUpFetch,
  fetchingCurrentUser,
  clearUserAction
};
