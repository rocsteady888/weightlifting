import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../src/style/Theme';

import PrivateRouter from './components/common/PrivateRouter';

import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Landing from './components/pages/Landing';
import Dashboard from './components/pages/Dashboard';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  setCurrentUser(decoded);

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    console.log('token expired');
    // Logout user
    logoutUser();
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MuiThemeProvider theme={theme}>
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Switch>
              <PrivateRouter exact path="/dashboard" component={Dashboard} />
            </Switch>
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default App;
