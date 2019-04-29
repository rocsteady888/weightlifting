import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './store/actions/authActions';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../src/style/Theme';

import { Provider } from 'react-redux';
import store from './store/store';

import PrivateRoute from './components/common/PrivateRoute';

import Appbar from './components/navigation/Appbar';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Landing from './components/pages/Landing';
import Dashboard from './components/pages/Dashboard';
import Sessions from './components/pages/Sessions';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    console.log('token expired');
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    console.log('redirecting');
    window.location.href = '/login';
  }
}

function App(props) {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <MuiThemeProvider theme={theme}>
            <Appbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/sessions" component={Sessions} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </MuiThemeProvider>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
