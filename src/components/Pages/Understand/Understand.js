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
    //Change page from /undertand to /support
    this.props.history.push('/support');
  }

  showTextArea = () => {
    //Message is what will be displayed in the placeholder of the textarea box
    let message = '';
    if(this.state.understandState.level === '1') {
        message = `Please let us know what you’re struggling with the most; be as specific as possible so that we can help!`;
    }else if(this.state.understandState.level === '2') {
        message = `Which specific topic(s) came up today that you could use more reinforcement on?`;
    }else if(this.state.understandState.level === '3') {
        message = `Please take a moment to share your thoughts on which topics are most challenging and any ideas about actions that could boost your understanding.`;
    }else if(this.state.understandState.level === '4') {
        message = `If you’d like to share, we’d love to hear more about what made your understanding successful today.`;
    }else if(this.state.understandState.level === '5') {
        message = `Awesome!  If you’d like to share, we’d love to hear your thoughts on what made your understanding greatly successful today.`;
    }

    //Conditional to decide if you should render the textarea field
    if(this.state.understandState.level !== '') {
      return(
        <textarea 
            placeholder= {message}
            onChange={(event) => this.handleChangeForState(event, 'summary')}
            value={this.state.summary}>
        </textarea>
      );
    }
  }

  //Conditional to not allow the user to advance until they provide a response to the level
  showNextButton = () => {
    if(this.state.understandState.level !== '') { 
      return (
      <button className="button" onClick={this.handleAnswer}>Next</button>
      );
    }
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
                {this.showTextArea()}
                </div>
            </section>
            {this.showNextButton()}
        </form>
      </div>
    );
  }
}

export default withRouter(connect()(Understand));