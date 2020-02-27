import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Pages from './Components';
import userActions from './Redux/userActions';
import senatorsActions from './Redux/senatorActions';

function App() {
  const senators = useSelector(state => state.senators);
  const user = useSelector(state => state.user);
  console.log(senators);
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      dispatch(userActions.fetchingCurrentUser());
      dispatch(senatorsActions.fetchSenators());
    }
  }, []);

  if (user.id) {
    return (
      <Switch>
        <Route exact path="/profile" component={Pages.Profile} />
        <Route exact path="/login" component={Pages.Login} />
        <Route exact path="/signup" component={Pages.Signup} />
        <Route exact path="/senators" component={Pages.SenatorContainer} />
        <Route exact path="/main" component={Pages.MainContainer} />
        <Route exact path="/logout" component={Pages.Logout} />
        <Route exact path="/" component={Pages.Home} />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/login" component={Pages.Login} />
        <Route path="/signup" component={Pages.Signup} />
        <Route path="/" component={Pages.Home} />
      </Switch>
    );
  }
}

export default withRouter(App);
