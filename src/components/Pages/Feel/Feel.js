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
       <h1>Feel Page</h1>
       <p>Create Radio Button Here</p>
       <p>Create Text Field Here</p>
       <button onClick={this.handleChangePage}>Next</button>
      </div>
    );
  }
}

export default withRouter(Feel);