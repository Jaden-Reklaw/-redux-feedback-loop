import React, { Component } from 'react';

//Import to do routing
import {withRouter} from 'react-router-dom';

//Connect to redux store
import { connect } from 'react-redux';

class Support extends Component {
  //Local state
  state = {
    supportState: {
      level: '',
      summary: '',
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

  //Method for changing a page and submitting support page state to the redux store
  handleAnswer = (event) => {
    event.preventDefault();
    console.log(`Local State Support`, this.state.supportState);
    //Send state to the redux store
    this.props.dispatch({type: 'SET_SUPPORT', payload: this.state.supportState});
    //Change page from /support to /comments
    this.props.history.push('/comments');
  }

  showTextArea = () => {
    //Message is what will be displayed in the placeholder of the textarea box
    let message = '';
    if(this.state.supportState.level === '1') {
        message = `We’re sorry that Prime staff had an unwelcome effect on your day. Please share more details here.  We encourage you to connect with Prime staff by checking the box at the bottom of this form.  We take your concerns seriously. `;
    }else if(this.state.supportState.level === '2') {
        message = `We’re sorry that Prime staff had an unwelcome effect on your day. Please share more details here.  We encourage you to connect with Prime staff by checking the box at the bottom of this form.  We take your concerns seriously. `;
    }else if(this.state.supportState.level === '3') {
        message = `We’d love to hear any thoughts on how we may have better met your needs during the day!`;
    }else if(this.state.supportState.level === '4') {
        message = `If you’d like to share, we’d like to hear any specifics about things that helped you feel supported today.`;
    }else if(this.state.supportState.level === '5') {
        message = `Awesome!  If you’d like to share, we’d greatly appreciate any feedback on what helped you feel most supported today.`;
    }

    //Conditional to decide if you should render the textarea field
    if(this.state.supportState.level !== '') {
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
    if(this.state.supportState.level !== '') { 
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
                    <h2>Did you feel supported by Prime staff today?</h2>
                    <span>I feel abandoned.</span>
                    <div className="inner-div" onChange={(event) => this.handleChangeForState(event, 'level')}>
                        <label className="container">1<input type="radio" value="1" name="Type" /><span className="checkmark"></span></label>
                        <label className="container">2<input type="radio" value="2" name="Type" /><span className="checkmark"></span></label>
                        <label className="container">3<input type="radio" value="3" name="Type" /><span className="checkmark"></span></label>
                        <label className="container">4<input type="radio" value="4" name="Type" /><span className="checkmark"></span></label>
                        <label className="container">5<input type="radio" value="5" name="Type" /><span className="checkmark"></span></label>
                    </div>
                    <span>I feel supported!</span>
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

export default withRouter(connect()(Support));