import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddWorkoutForm from './AddWorkoutForm';
import { createNewSession, getRecentSessions, getIncompleteSessions } from '../../../store/actions/sessionActions';
import isEmpty from '../../../utils/isEmpty';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
  componentDidMount() {
    this.props.getRecentSessions();
    this.props.getIncompleteSessions();
  }

  render() {

    const { classes, createNewSession, sessions } = this.props;
    let recentSessionsList;
    if(!isEmpty(sessions.currentSession)) {
      recentSessionsList = null;
    } else if (sessions.loading) {
      recentSessionsList = <span>Sessions Loading</span>
    } else if (isEmpty(sessions.recentSessions)) {
      recentSessionsList = <span>No sessions to display</span>
    } else {
      recentSessionsList = 
        <List component="nav">
          {
            sessions.recentSessions.map(session =>
            <ListItem button>
              <ListItemText primary={session.created} />
            </ListItem>)
          }
        </List>
    }

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Sessions</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              {
                sessions.currentSession._id
                ?
                <AddWorkoutForm />
                :
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={createNewSession}
                >
                  Start New Session
                </Button>
              }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>Workout Plans</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              {recentSessionsList}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Sessions.propTypes = {
  classes: PropTypes.object.isRequired,
  sessions: PropTypes.object.isRequired,
  createNewSession: PropTypes.func.isRequired,
  getRecentSessions: PropTypes.func.isRequired,
  getIncompleteSessions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  sessions: state.sessions
});

export default connect(mapStateToProps, { createNewSession, getRecentSessions, getIncompleteSessions })(withStyles(styles)(Sessions));