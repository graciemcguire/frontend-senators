import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import wokeorjoke_v1 from '../wokeorjoke_v1.svg';
import userActions from '../Redux/userActions';

const initialState = {
  username: '',
  email: '',
  password: ''
};

function Signup() {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const submitHandler = e => {
    e.preventDefault();
    dispatch(userActions.signUpFetch(form));
  };

  return (
    <div className="App-header">
      <img className="logo-small" src={wokeorjoke_v1} alt="logo" />
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          placeholder="username"
          className="input"
          value={form.username}
          onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          className="input"
          value={form.email}
          onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="input"
          value={form.password}
          onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
        />
        <center>
          <Link className="button" to={'/login'}>
            Have an Account?
          </Link>
          <button className="button" type="submit">
            Sign Up!
          </button>
        </center>
      </form>
    </div>
  );
}
export default Signup;
