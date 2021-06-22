import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header'
import { Users } from './Users'
import CreateUser from './CreateUser'
import { createUser } from '../services/UserService'

class Register extends Component {

  state = {
    user: {},
    users: [],
    numberOfUsers: 0
  }

  createUser = (e) => {
      createUser(this.state.user)
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
      if (e.target.name === 'firstname') {
          user.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
          user.lastName = e.target.value;
      } else if (e.target.name === 'username') {
          user.username = e.target.value;
      } else if (e.target.name === 'password') {
        user.password = e.target.value;
      }

      user.ca_activity_1 = '';
      user.ca_activity_2 = '';
      user.ca_activity_3 = '';
      user.ca_activity_4 = '';
      user.ca_activity_5 = '';
      user.ca_activity_6 = '';
      user.ca_activity_7 = '';
      user.ca_activity_8 = '';
      user.ca_activity_9 = '';
      user.ca_activity_10 = '';

      user.ca_award_1 = '';
      user.ca_award_2 = '';
      user.ca_award_3 = '';
      user.ca_award_4 = '';
      user.ca_award_5 = '';

      this.setState({user})
  }

  render() {
    
    return (
      <div className="Register">
        <div className="">
          <div className="row">
            <div className="col-md-12">
                <CreateUser 
                  user={this.state.user}
                  onChangeForm={this.onChangeForm}
                  createUser={this.createUser}
                  >
                </CreateUser>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Users users={this.state.users}></Users>
        </div>
      </div>
    );
  }
}

export default Register;