import API from '../API';

export const createRating = ratings => ({
  type: 'CREATE_RATING',
  payload: { ratings }
});

const setSenatorsAction = sens => ({
  type: 'SET_SENATORS',
  payload: sens
});

/////////////////////////// FETCH
export const fetchSenators = () => dispatch => {
  fetch(API.SENATORS_URL, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.token}`
    }
  })
    .then(r => r.json())
    .then(senators => dispatch(setSenatorsAction(senators)));
};

export const handleCreateRating = (senatorId, wokeOrJoke) => {
  return dispatch => {
    fetch(API.RATINGS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        senator_id: senatorId,
        user_rating: wokeOrJoke
      })
    })
      .then(r => r.json())
      .then(data => {
        console.log('Data from Rating -----------> ', data);
      });
    // .then(data => dispatch(createRating(data)));
  };
};

// export const fetchUserSenators = token => {
//   return dispatch => {
//     fetch('http://localhost:3001/api/v1/user_rating', {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`
//       }
//     })
//       .then(r => r.json())
//       .then(userSenators => dispatch(fetchRatings(userSenators)));
//   };
// };

// EXPORT

export default {
  fetchSenators,
  handleCreateRating
};
