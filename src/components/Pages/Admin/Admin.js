import React, { Component } from 'react';

//Import to do routing
import {withRouter} from 'react-router-dom';

class Admin extends Component {
    //Method for changing pages
    handleChangePage = () => {
        console.log('handleChangePage for Admin');
        //change page from /comments to /review page
        this.props.history.push( '/review' );
    }

  render() {
    return (
      <div>
       <h1>Admin Page</h1>
       <p>Get informtion from the server and render it here</p>
      </div>
    );
  }
}

export default withRouter(Admin);