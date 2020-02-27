import React from 'react';
import { Link } from 'react-router-dom';
import wokeorjoke_v1 from '../wokeorjoke_v1.svg';

function Nav() {
  const profileLink = () => {
    if (localStorage.getItem('token')) {
      return (
        <>
          <Link className="button nav-links" to={`/profile`}>
            Your Profile
          </Link>
          <Link className="button nav-links" to={'/logout'}>
            Log Out
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link className="button nav-links" to={'/login'}>
            Log in?
          </Link>
          <Link className="button nav-links" to={'/signup'}>
            Sign Up?
          </Link>
        </>
      );
    }
  };

  return (
    <>
      <div className="nav">
        <img className="logo-nav nav-logo" src={wokeorjoke_v1} alt="logo" />
        <Link className="button nav-links" to={'/main'}>
          Rate Senators
        </Link>
        <Link className="button nav-links" to={'/senators'}>
          All Senators
        </Link>
        {profileLink()}
      </div>
    </>
  );
}

export default Nav;
