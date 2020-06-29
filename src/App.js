import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/customers' component={HomeContainer} />
        </div>
      </Router>
    );
  }
}
export default App;
