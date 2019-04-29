import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SideNav from './SideNav';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
};

function Appbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar style={{ color:'white', background: 'linear-gradient(to right bottom, #ef6c00, #ff4081)' }} position="static">
        <Toolbar>
          <SideNav />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Weightlifting
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Appbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Appbar);