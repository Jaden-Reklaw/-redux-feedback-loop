import React, { Component } from 'react';

//Import to do routing
import {withRouter} from 'react-router-dom';

class Review extends Component {
    

  render() {
    return (
      <div>
       <h1>Review Page</h1>
       <p>Output Content that has been submitted to the server here.</p>
      </div>
    );
  }
}

export default withRouter(Review);