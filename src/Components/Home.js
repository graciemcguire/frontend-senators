import React from 'react';
import { Link } from 'react-router-dom';
import wokeorjoke_v1 from '../wokeorjoke_v1.svg';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-main">
          <img src={wokeorjoke_v1} alt="logo" />
        </div>

        <div className="main-buttons">
          <Link to="/signup">
            <button className="button">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="button">Login</button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Home;
