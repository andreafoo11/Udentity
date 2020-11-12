/* Component Name: App.js
 * Purpose: routing the different components
 * Props: None
 */
 
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Form from './form.js'
import Dashboard from './dashboard.js'

class App extends Component {
  
  render() {
    return (
      <Router>
          	<div>
          		<div className = "app">
                  <Route exact path="/" component={Form} />
                  <Route exact path="/dashboard" component={Dashboard} />
              </div>
            </div>
      </Router>
    );
  }
}

export default App;
