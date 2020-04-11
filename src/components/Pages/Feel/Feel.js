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
        }
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
        if(this.state.feelState.level !== '') {
            return(
                <textarea 
                    placeholder="Conditional Rendering for Placeholder based of radio button picked"
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
                {this.showTextArea()}
                <div>
                    
                </div>
            </section>
            <button className="button" onClick={this.handleAnswer}>Next</button>
        </form>
        </div>
    );
  }
}

export default withRouter(connect()(Feel));