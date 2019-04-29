import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createNewSession } from '../../store/actions/sessionActions';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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

class Sessions extends React.Component {

  render() {

    const { classes } = this.props;

    return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Sessions</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              fullWidth
              onClick={this.props.createNewSession}
            >
              New Session
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
  }
}

Sessions.propTypes = {
  classes: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired,
  createNewSession: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  session: state.session
});

export default connect(mapStateToProps, { createNewSession })(withStyles(styles)(Sessions));