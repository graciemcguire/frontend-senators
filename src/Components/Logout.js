import React from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../Redux/userActions';
function Logout({ history }) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(userActions.clearUserAction());
    history.push('/');
  };

  return <div>{handleLogout()}</div>;
}
export default Logout;
