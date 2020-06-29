import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';

class App extends Component {

  renderHome = () => <HomeContainer />;

  renderCustomerContainer = () => <h1>Customers Container</h1>;

  renderCustomerListContainer = () => <CustomersContainer />;

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
