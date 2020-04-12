import React, { Component } from 'react';

//Import to do routing
import {withRouter} from 'react-router-dom';

//Connect to redux store
import { connect } from 'react-redux';

class Review extends Component {
  render() {
    const feedback = this.props.feedback;
    return (
      <div>
       <h2>Review Page</h2>
       <p>Output Content that will be submitted to the server here.</p>
       {JSON.stringify(this.props.feedback)}
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
       <button>Submit</button>
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