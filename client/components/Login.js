import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header'
import { Users } from './Users'
import LoginUser from './LoginUser'
import { loginUser } from '../services/UserService'
import { withRouter } from 'next/router'
import { withIronSession } from "next-iron-session";

class Login extends Component {

  state = {
    user: {}
  }

  loginUser = (e) => {
      loginUser(this.state.user)
        .then(response => {
          var username = response['username'];

          if (username) {
            this.props.router.push({
              pathname: '/home',
              as: '/home',
              query: { username: username }
            });
          }
      });
  }


  onChangeForm = (e) => {
      let user = this.state.user
      if (e.target.name === 'username') {
          user.username = e.target.value;
      } else if (e.target.name === 'password') {
          user.password = e.target.value;
      } 
      this.setState({user})
  }

  render() {
    
    return (
      <div className="Login">
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-12">
                <LoginUser 
                  user={this.state.user}
                  onChangeForm={this.onChangeForm}
                  loginUser={this.loginUser}
                  >
                </LoginUser>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);