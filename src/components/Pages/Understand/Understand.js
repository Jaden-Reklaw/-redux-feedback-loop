import React, { Component } from 'react';

//Import to do routing
import {withRouter} from 'react-router-dom';

class Understand extends Component {
    //Method for changing pages
    handleChangePage = () => {
        console.log('handleChangePage for Understand');
        //change page to info page
        this.props.history.push( '/support' );
    }
  render() {
    return (
      <div>
       <h1>Understand Page</h1>
       <p>Create Radio Button Here</p>
       <p>Create Text Field Here</p>
       <button onClick={this.handleChangePage}>Next</button>
      </div>
    );
  }
}

export default withRouter(Understand);