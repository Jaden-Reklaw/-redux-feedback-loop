import React, { Component } from 'react';

//Import to do routing
import {withRouter} from 'react-router-dom';

//Connect to redux store
import { connect } from 'react-redux';

class Comments extends Component {
  state = {
    commentState: {
      thank_summary: '',
      proud_summary: '',
      last_summary: '',
    }
  }

  //Method for handling a change in state on the form
  handleChangeForState = (event, propertyName) => {
    this.setState({
      supportState: {
        ...this.state.supportState,
        [propertyName]: event.target.value
      }
    });
  }

  //Method for changing a page and submitting comments page state to the redux store
  handleAnswer = (event) => {
    event.preventDefault();
    console.log(`Local State Comments`, this.state.supportState);
    //Send state to the redux store
    this.props.dispatch({type: 'SET_COMMENT', payload: this.state.supportState});
    //Change page from /support to /comments
    this.props.history.push('/review');
  }

  render() {
    return (
      <div className="top-div">
        <form>
          <section>
            <div>
              <h2>Would you like to give thanks to someone today?</h2>
              <textarea 
                placeholder= "Say a few words about how they made your day better!"
                onChange={(event) => this.handleChangeForState(event, 'thank_summary')}
                value={this.state.thank_summary}>
              </textarea>
            </div>
            <div>
              <h2>Share one thing that you're proud of accomplishing today.</h2>
              <textarea 
                onChange={(event) => this.handleChangeForState(event, 'proud_summary')}
                value={this.state.proud_summary}>
              </textarea>
            </div>
            <div>
              <h2>Is there anything else you'd like us to know?</h2>
              <textarea 
                onChange={(event) => this.handleChangeForState(event, 'last_summary')}
                value={this.state.last_summary}>
              </textarea>
            </div>
          </section>
          <button className="button" onClick={this.handleAnswer}>Next</button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect()(Comments));