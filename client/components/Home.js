import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeForm from './HomeForm'
import { submitForm, getUser } from '../services/UserService'
import { withRouter } from 'next/router'

class Home extends Component {

  state = {
    user: {},
    user_data: []
  }

  submitForm = (data) => {
      submitForm(data)
        .then(response => {
      });
  }

  handleEditorChange = (content, activityId, editor) => {
    let data = {
        'username': this.props.router.query.username,
    };

    data[activityId] = content;

    submitForm(data)
    .then(response => {
    });
  }

  onChangeForm = (e) => {
      let user = this.state.user
      user.username = this.props.router.query.username;

      if (e.target.name === 'ca_activity_1') {
          user.ca_activity_1 = e.target.value;
      } else if (e.target.name === 'ca_activity_2') {
          user.ca_activity_2 = e.target.value;
      } else if (e.target.name === 'ca_activity_3') {
          user.ca_activity_3 = e.target.value;
      } else if (e.target.name === 'ca_activity_4') {
          user.ca_activity_4 = e.target.value;
      } else if (e.target.name === 'ca_activity_5') {
          user.ca_activity_5 = e.target.value;
      } else if (e.target.name === 'ca_activity_6') {
          user.ca_activity_6 = e.target.value;
      } else if (e.target.name === 'ca_activity_7') {
          user.ca_activity_7 = e.target.value;
      } else if (e.target.name === 'ca_activity_8') {
          user.ca_activity_8 = e.target.value;
      } else if (e.target.name === 'ca_activity_9') {
          user.ca_activity_9 = e.target.value;
      } else if (e.target.name === 'ca_activity_10') {
          user.ca_activity_10 = e.target.value;
      } else if (e.target.name === 'ca_award_1') {
          user.ca_award_1 = e.target.value;
      } else if (e.target.name === 'ca_award_2') {
          user.ca_award_2 = e.target.value;
      } else if (e.target.name === 'ca_award_3') {
          user.ca_award_3 = e.target.value;
      } else if (e.target.name === 'ca_award_4') {
          user.ca_award_4 = e.target.value;
      } else if (e.target.name === 'ca_award_5') {
          user.ca_award_5 = e.target.value;
      } 
      this.setState({user});
  }

  render() {
    
        return (
        <div className="Home">
            <div className="container mrgnbtm">
            <div className="row">
                <div className="col-md-12">
                    <HomeForm 
                    user={this.state.user}
                    username = {this.props.router.query.username}
                    getUser={this.getUser}
                    submitForm={this.submitForm}
                    handleEditorChange={this.handleEditorChange}
                    >
                    </HomeForm>
                </div>
            </div>
            </div>
        </div>
        );
  }
}

export default withRouter(Home);