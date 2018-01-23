import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const Login = ({ startLogin }) => (
  <div className="login-page">
    <div className="login__box">
      <h1 className="heading-secondary u-margin-bottom-small">Expensify</h1>
      <p className="paragraph u-margin-bottom-small">It's time to get your expenses under control.</p>
      <button onClick={startLogin} className="btn">Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);