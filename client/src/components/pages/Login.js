import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { loginUser } from '../../store/actions/authActions';

import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Login(props) {
  const { classes } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userData = {email: email, password: password}

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <form>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email address"
              type="email"
              name="email"
              required
            />
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              name="password"
              required
            />
          </form>
          <p>{userData.email}</p>
          <button onClick={() => loginUser(userData)}>Submit</button>
        </Grid>
      </Grid>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);