export default (state = [], { type, payload }) => {
  switch (type) {
    case 'SET_SENATORS':
      return payload;
    case 'CLEAR_SENATORS':
      return [];
    default:
      return state;
  }
};
