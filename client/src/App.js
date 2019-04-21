import React, { useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './store/actions/authActions';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../src/style/Theme';

import { Store } from './store/Store';

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

function App() {
  const { state, dispatch } = useContext(Store);
  return (
    <Router>
      <div className="App">
        {console.log(state)}
        <MuiThemeProvider theme={theme}>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </MuiThemeProvider>
      </div>
    </Router>
  );
}

export default App;
