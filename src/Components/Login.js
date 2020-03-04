import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../Redux/userActions';
import { Link, useHistory } from 'react-router-dom';
import wokeorjoke_v1 from '../wokeorjoke_v1.svg';

function Login() {

  const history = useHistory();
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const initialState = {
    email: '',
    password: ''
  };

  const [form, setForm] = useState(initialState);
  // Submit
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userActions.loginFetch(form));
    setLoaded(!loaded);
    history.push('/main');
  };

  // render form
  const renderLoginForm = () => {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="email"
            placeholder="email"
            value={form.email}
            onChange={e =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="password"
            value={form.password}
            onChange={e =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
          <center>
            <Link className="button" to={'/signup'}>
              Sign Up?
            </Link>
            <button className="button" type="submit">
              Login
            </button>
          </center>
        </form>
      </div>
    );
  };

  // RETURN
  return (
    <div className="App-header">
      <img className="logo-small" src={wokeorjoke_v1} alt="logo" />
      { renderLoginForm() }
    </div>
  );
}

export default Login;
