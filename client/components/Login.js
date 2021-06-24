import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header'
import { Users } from './Users'
import LoginUser from './LoginUser'
import { loginUser } from '../services/UserService'
import { withRouter } from 'next/router'
import { withIronSession } from "next-iron-session";

const Login = (props) => {

  // initial state of user
  let initialCredentials = {
    username: '',
    password: ''
  }

  // React Hooks for user state
  const [user, setUser] = React.useState(initialCredentials);

  /**
   * Login the user when the user clicks submit.
   * @param {HTMLElement} e the element event which was interacted with
   * @returns {void}
   */
  const handleLogin = (e) => {
    // call service
    loginUser(user)
    .then(response => {
      var username = response['username'];
      // go to users home page if they exist in the db response
      if (username) {
        this.props.router.push({
          pathname: '/home',
          as: '/home',
          query: { username: username }
        });
      }
    });
  }

  /**
   * update user state when the user changes any input field values.
   * @param {HTMLElement} e the element event which was interacted with
   * @returns {void}
   */
  const onChangeForm = (e) => {
    // destructure user state object based on which input changed
    if (e.target.name === 'username') {
      user = {...user, username: e.target.value};
    } else if (e.target.name === 'password') {
      user = {...user, password: e.target.value};
    }
    // update user state
    setUser(user);
  }

  return (
    <div className="Login">
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-12">
            <LoginUser 
              user={user}
              onChangeForm={onChangeForm}
              loginUser={handleLogin}
              >
            </LoginUser>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);