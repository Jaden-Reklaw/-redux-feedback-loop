import React, { Component } from 'react';

//Import to do routing
import {withRouter} from 'react-router-dom';

class Support extends Component {
    //Method for changing pages
    handleChangePage = () => {
        console.log('handleChangePage for Support');
        //change page to info page
        this.props.history.push( '/comments' );
    }

  render() {
    return (
      <div>
       <h1>Support Page</h1>
       <p>Create Radio Button Here</p>
       <p>Create Text Field Here</p>
       <button onClick={this.handleChangePage}>Next</button>
      </div>
    );
  }
}

export default withRouter(Support);