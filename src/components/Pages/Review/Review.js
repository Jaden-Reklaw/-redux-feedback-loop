import React, { Component } from 'react';

//Import to do routing
import {withRouter} from 'react-router-dom';

//Connect to redux store
import { connect } from 'react-redux';

//Bring in sweetAlert
import swal from 'sweetalert';

class Review extends Component {
  //Method for sending info to the server
  submitSurvey = (event, feedback) => {
    console.log('submitSurvey');
    console.log('feeback', feedback);

    //Create options for fetch api and attach to second arg
    const options = {
      method: 'POST', 
      headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(feedback)
    };

    //Using fetch api to send information to the server
    fetch('./api/survey', options).then(response => {
      console.log('sending survey to server',response);
    }).catch(error => {
        console.log('Error:', error);
    });

    //sweetAlert for notifying users of a successful post and return to the home screen to take another survey
    swal({
      title: "Thank you for completing your daily feedback!",
      text: "Would you like take another survey?",
      icon: "warning",
      buttons: ["No", "Yes"],
      dangerMode: false,
    }).then((willTakeSurvey) => {
      if (willTakeSurvey) {
          //Change page from /review to /
          this.props.history.push('/');
        } else {
        swal("You may close the web browser now!");
      }
    });
  }

  render() {
    const feedback = this.props.feedback;
    return (
      <div>
        <h2>Review Page</h2>
        <div>
          <h4>Feelings: {feedback.feel.level}</h4>
          <p>Comments: {feedback.feel.summary}</p>
          <h4>Understanding: {feedback.understand.level}</h4>
          <p>Comments: {feedback.understand.summary}</p>
          <h4>Support: {feedback.support.level}</h4>
          <p>Comments: {feedback.support.summary}</p>
          <h4>Thanks</h4>
          <p>Comments: {feedback.comment.thank_summary}</p>
          <h4>Proud Moment</h4>
          <p>Comments: {feedback.comment.proud_summary}</p>
          <h4>Last Comments</h4>
          <p>Comments: {feedback.comment.last_summary}</p>
          <button onClick={ (event) => this.submitSurvey(event, feedback) }>Submit</button>
        </div>
        
      </div>
    );
  }
}

//Create connection to redux store located on index.js
//So you can use redux state as props
const mapStateToProps = (reduxStore) => ({
  feedback: reduxStore.feedback.feedback
});

export default withRouter(connect(mapStateToProps)(Review));