import React, { Component } from 'react';

//Import to do routing
import {withRouter} from 'react-router-dom';

class Feel extends Component {

    //Method for changing pages
    handleChangePage = () => {
        console.log('handleChangePage for Feel');
        //change page to info page
        this.props.history.push( '/understand' );
    }

  render() {
    return (
        <div>
        <h2>How are you feeling today?</h2>
        <span>I'm very stressed!</span>
        <label><input type="radio" value="1" name="Type" />1</label>
        <label><input type="radio" value="2" name="Type" />2</label>
        <label><input type="radio" value="3" name="Type" />3</label>
        <label><input type="radio" value="4" name="Type" />4</label>
        <label><input type="radio" value="5" name="Type" />5</label>
        <span>I'm feeling great!</span>
        <textarea placeholder="Conditional Rendering for Placeholder based of radio button picked">
        </textarea>
        <button onClick={this.handleChangePage}>Next</button>
        </div>
    );
  }
}

export default withRouter(Feel);