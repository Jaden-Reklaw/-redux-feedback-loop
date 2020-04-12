import React, { Component } from 'react';

//Import to do routing
import {withRouter} from 'react-router-dom';

//Connect to redux store
import { connect } from 'react-redux';

//Import Styles
import './Feel.css'

class Feel extends Component {
    //Local state
    state = {
        feelState: {
            level: '',
            summary: '',
        },
    }

    //Method for handling a change in state on the form
    handleChangeForState = (event, propertyName) => {
        this.setState({
            feelState: {
                ...this.state.feelState,
                [propertyName]: event.target.value
            }
        });
    }

    //Method for changing a page and submitting feel page state to the redux store
    handleAnswer = (event) => {
        event.preventDefault();
        console.log(`Local State Feel`, this.state.feelState);
        //Send state to the redux store
        this.props.dispatch({type: 'SET_FEEL', payload: this.state.feelState});
        //Change page from / to /understand
        this.props.history.push('/understand');
    }

    //Condtional rendering that waits for the level to be selected
    showTextArea = () => {
        //Message is what will be displayed in the placeholder of the textarea box
        let message = '';
        if(this.state.feelState.level === '1') {
            message = 'Message in case 1 is selected';
        }else if(this.state.feelState.level === '2') {
            message = 'Message in case 2 is selected';
        }else if(this.state.feelState.level === '3') {
            message = 'Message in case 3 is selected';
        }else if(this.state.feelState.level === '4') {
            message = 'Message in case 4 is selected';
        }else if(this.state.feelState.level === '5') {
            message = 'Message in case 5 is selected';
        }

        //Conditional to decide if you should render the textarea field
        if(this.state.feelState.level !== '') {
            return(
                <textarea 
                    placeholder= {message}
                    onChange={(event) => this.handleChangeForState(event, 'summary')}
                    value={this.state.summary}>
                </textarea>
            );
        }
    }

  render() {
    return (
        <div className="top-div">
        <form>
            <section>
                <div>
                    <h2>How are you feeling today?</h2>
                    <span>I'm very stressed!</span>
                    <div className="inner-div" onChange={(event) => this.handleChangeForState(event, 'level')}>
                        <label className="container">1<input type="radio" value="1" name="Type" /><span className="checkmark"></span></label>
                        <label className="container">2<input type="radio" value="2" name="Type" /><span className="checkmark"></span></label>
                        <label className="container">3<input type="radio" value="3" name="Type" /><span className="checkmark"></span></label>
                        <label className="container">4<input type="radio" value="4" name="Type" /><span className="checkmark"></span></label>
                        <label className="container">5<input type="radio" value="5" name="Type" /><span className="checkmark"></span></label>
                    </div>
                    <span>I'm feeling great!</span>
                </div>
                
                {/* Use conditional Rendering to decide once a radio button is selected to display and the type of message */}
                <div>
                    {this.showTextArea()}
                </div>
            </section>
            <button className="button" onClick={this.handleAnswer}>Next</button>
        </form>
        </div>
    );
  }
}

export default withRouter(connect()(Feel));