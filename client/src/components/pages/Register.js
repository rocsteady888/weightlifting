import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

function Register(props) {
  const { classes } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDOB] = useState("");

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <form>
            <input
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder="First Name"
              type="text"
              name="firstName"
              required
            />
            <input
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder="Last Name"
              type="text"
              name="lastName"
              required
            />
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
            <input
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              required
            />
            <input
              value={dob}
              onChange={e => setDOB(e.target.value)}
              placeholder="Date of birth"
              type="date"
              name="dob"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);