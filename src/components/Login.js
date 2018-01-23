import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const Login = ({ startLogin }) => (
  <div>
    <h1>Expensify</h1>
    <p>It's time to get your expenses under control.</p>
    <button onClick={startLogin}>Login with Google</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);