import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/actions/authActions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  list: {
    width: 250,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class SideNav extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({
      left: open,
    });
  };

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { classes } = this.props;
    const { isAuthenticated } = this.props.auth;
  
    const authLinks = (
      <React.Fragment>
        <ListItem>
          <Button fullWidth={true} color="inherit" component={Link} to="/">Home</Button>
        </ListItem>
        <ListItem>
          <Button fullWidth={true} color="inherit" component={Link} to="/sessions">Sessions</Button>
        </ListItem>
        <ListItem>
          <Button fullWidth={true} color="inherit" component={Link} to="/workout-plan">Plan</Button>
        </ListItem>
        <ListItem>
          <Button fullWidth={true} color="inherit" component={Link} to="/progress">Progress</Button>
        </ListItem>
        <ListItem>
          <Button fullWidth={true} color="inherit" onClick={this.onLogoutClick}>Logout</Button>
        </ListItem>
      </React.Fragment>
    );
  
    const guestLinks = (
      <React.Fragment>
        <ListItem>
          <Button fullWidth={true} color="inherit" component={Link} to="/">Home</Button>
        </ListItem>
        <ListItem>
          <Button fullWidth={true} color="inherit" component={Link} to="/login">Login</Button>
        </ListItem>
        <ListItem>
          <Button fullWidth={true} color="inherit" component={Link} to="/register">Register</Button>
        </ListItem>
      </React.Fragment>
    );
  
    return (
      <div>
        <IconButton className={classes.menuButton} onClick={this.toggleDrawer(true)} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
          <List
            className={classes.list}
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
          {isAuthenticated ? authLinks : guestLinks}
          </List>
        </Drawer>
      </div>
    );
  }
}

SideNav.propTypes = {
  classes: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(withStyles(styles)(SideNav));