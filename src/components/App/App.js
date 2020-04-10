import React, { Component } from 'react';

//Import Components
import Header from '../Header/Header';

//Import Modules for routing pages
import { HashRouter as Router, Route} from 'react-router-dom';

//Import Components for individual Pages
import Feel from '../Pages/Feel/Feel';
import Understand from '../Pages/Understand/Understand';
import Support from '../Pages/Support/Support';
import Comments from '../Pages/Comments/Comments';
import Review from '../Pages/Review/Review';


class App extends Component {
  render() {
    return (
      <div>
       <Header />
       <Router>
          <Route exact path='/' component={Feel} />
          <Route path='/understand' component={Understand} />
          <Route path='/support' component={Support} />
          <Route path='/comments' component={Comments} />
          <Route path='/review' component={Review} />
          {/* <Route path='/admin' component={Admin} /> */}
        </Router> 
       
      </div>
    );
  }
}

export default App;
