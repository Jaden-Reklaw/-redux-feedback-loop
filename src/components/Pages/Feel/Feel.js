import React, { Component } from 'react';

//Import to do routing
import {withRouter} from 'react-router-dom';

//Import Styles
import './Feel.css'

class Feel extends Component {

    //Method for changing pages
    handleChangePage = () => {
        console.log('handleChangePage for Feel');
        //change page to info page
        this.props.history.push( '/understand' );
    }

  render() {
    return (
        <div className="top-div">
        <form>
            <section>
                <div>
                    <h2>How are you feeling today?</h2>
                    <span>I'm very stressed!</span>
                    <div class="inner-div">
                        <label className="container">1<input type="radio" value="1" name="Type" /><span class="checkmark"></span></label>
                        <label className="container">2<input type="radio" value="2" name="Type" /><span class="checkmark"></span></label>
                        <label className="container">3<input type="radio" value="3" name="Type" /><span class="checkmark"></span></label>
                        <label className="container">4<input type="radio" value="4" name="Type" /><span class="checkmark"></span></label>
                        <label className="container">5<input type="radio" value="5" name="Type" /><span class="checkmark"></span></label>
                    </div>
                    <span>I'm feeling great!</span>
                </div>
                
                {/* Use conditional Rendering to decide once a radio button is selected to display and the type of message */}
                <div>
                    <textarea placeholder="Conditional Rendering for Placeholder based of radio button picked">
                    </textarea>
                </div>
            </section>
            <button className="button" onClick={this.handleChangePage}>Next</button>
        </form>
        
        </div>
    );
  }
}

export default withRouter(Feel);