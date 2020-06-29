import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';

class App extends Component {

  renderHome = () => <HomeContainer />;

  renderCustomerContainer = () => <h1>Customers Container</h1>;

  renderCustomerListContainer = () => <h1>Customers List  Container</h1>;

  renderCustomerNewContainer = () => <h1>Customers New Container</h1>;



  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={this.renderHome} />
          <Route exact path='/customers' component={this.renderCustomerListContainer} />
          <Switch>
            <Route path='/cutomers/new' component={this.renderCustomerNewContainer} />
            <Route path='/customers/:dni' component={this.renderCustomerContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
