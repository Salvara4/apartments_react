import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import ApartmentDetail from './ApartmentDetail'
import ApartmentIndex from './ApartmentIndex'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <Router>
           <div>
             <Header name='Apartments in San Diego' />
              <Route exact path="/" component={ApartmentIndex} />
              <Route path='/apartments/:id'component={ApartmentDetail} />
               <Footer />
             </div>
         </Router>
    );
  }
}

export default App;
