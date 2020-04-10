import React, { Component } from 'react';

//Import to do routing
import {withRouter} from 'react-router-dom';

class Comments extends Component {
    //Method for changing pages
    handleChangePage = () => {
        console.log('handleChangePage for Comments');
        //change page from /comments to /review page
        this.props.history.push( '/review' );
    }

  render() {
    return (
      <div>
       <h1>Comments Page</h1>
       <p>Create Text Field Here</p>
       <button onClick={this.handleChangePage}>Next</button>
      </div>
    );
  }
}

export default withRouter(Comments);