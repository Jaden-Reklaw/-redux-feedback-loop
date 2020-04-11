import React, { Component } from 'react';

//Import to do routing
import {withRouter} from 'react-router-dom';

//Connect to redux store
import { connect } from 'react-redux';

class Understand extends Component {
    //Local state
    state = {
      understandState: {
          level: '',
          summary: '',
      }
  }

  //Method for handling a change in state on the form
  handleChangeForState = (event, propertyName) => {
      this.setState({
          understandState: {
              ...this.state.understandState,
              [propertyName]: event.target.value
          }
      });
  }

  //Method for changing a page and submitting feel page state to the redux store
  handleAnswer = (event) => {
      event.preventDefault();
      console.log(`Local State Feel`, this.state.understandState);
      //Send state to the redux store
      this.props.dispatch({type: 'SET_UNDERSTAND', payload: this.state.understandState});
      //Change page from / to /understand
      this.props.history.push('/support');
  }

render() {
  return (
      <div className="top-div">
      <form>
          <section>
              <div>
                  <h2>How well did you understand today's material?</h2>
                  <span>I'm totally lost.</span>
                  <div className="inner-div" onChange={(event) => this.handleChangeForState(event, 'level')}>
                      <label className="container">1<input type="radio" value="1" name="Type" /><span className="checkmark"></span></label>
                      <label className="container">2<input type="radio" value="2" name="Type" /><span className="checkmark"></span></label>
                      <label className="container">3<input type="radio" value="3" name="Type" /><span className="checkmark"></span></label>
                      <label className="container">4<input type="radio" value="4" name="Type" /><span className="checkmark"></span></label>
                      <label className="container">5<input type="radio" value="5" name="Type" /><span className="checkmark"></span></label>
                  </div>
                  <span>I've got this!</span>
              </div>
              
              {/* Use conditional Rendering to decide once a radio button is selected to display and the type of message */}
              <div>
                  <textarea 
                      placeholder="Conditional Rendering for Placeholder based of radio button picked"
                      onChange={(event) => this.handleChangeForState(event, 'summary')}
                      value={this.state.summary}>
                  </textarea>
              </div>
          </section>
          <button className="button" onClick={this.handleAnswer}>Next</button>
      </form>
      </div>
  );
}
}

export default withRouter(connect()(Understand));