import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../Redux/userActions';
import { Link, useHistory } from 'react-router-dom';
// import { Redirect } from 'react-router';
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
  console.log(form);
  // Submit
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userActions.loginFetch(form));
    setLoaded(!loaded);
    history.push('/main');

    // // setTimeout(() => {
    // //   history.push('/main');
    // }, 200);
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
      {renderLoginForm()}
    </div>
  );
}

// class Login extends Component {
//   state = {
//     loaded: false
//   };

//   handleSubmit = e => {
//     const dispatch = useDispatch();
//     e.preventDefault();
//     dispatch(userActions.loginFetch(e));
//     // this.props.loginAndFetch(e, this.props.history);
//     this.setState({
//       loaded: true
//     });
//   };

//   renderLoginForm = () => {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             className="input"
//             type="text"
//             name="email"
//             placeholder="email"
//             value={this.props.email}
//           />
//           <input
//             className="input"
//             type="password"
//             name="password"
//             placeholder="password"
//             value={this.props.password}
//           />
//           <center>
//             <Link className="button" to={'/signup'}>
//               Sign Up?
//             </Link>
//             <button className="button" type="submit">
//               Login
//             </button>
//           </center>
//         </form>
//       </div>
//     );
//   };

//   render() {
//     return (
//       <div className="App-header">
//         <img className="logo-small" src={wokeorjoke_v1} alt="logo" />

//         {this.state.loaded ? <Redirect to="/main" /> : this.renderLoginForm()}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     user: state.user
//   };
// };

// // const mapDispatchToProps = dispatch => {
// //   return {
// //     loginAndFetch: (e, history) => dispatch(loginAndFetch(e, history))
// //   };
// // };

// export default withRouter(connect(mapStateToProps)(Login));
export default Login;
