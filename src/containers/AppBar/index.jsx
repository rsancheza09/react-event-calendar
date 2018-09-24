import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { AppBar, Toolbar, Typography, IconButton, Tooltip } from '@material-ui/core';
import { CalendarToday, AlarmAdd } from '@material-ui/icons';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import {
  getCurrentWeek,
} from '../../actions/week';

import AddEventForm from '../../components/AddEventForm';

const styles = {
  menuButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
};

class AppBarComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false,
      currentWeek: props.getCurrentWeek(),
    };
  }
  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  }
  handleClickClose = () => {
    this.setState({
      open: false,
    });
  }
  handleNewEvent = (data) => {
    console.log(data);
  }
  render () {
    return (
      <div className="app-bar">
        <AppBar>
          <Toolbar>
            <Typography variant="title" color="inherit">Weekly Planner</Typography>
            <div className={ this.props.classes.menuButtons }>
              <Tooltip title="Today">
                <IconButton>
                  <CalendarToday color="inherit" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Add Event">
                <IconButton onClick={ this.handleClickOpen }>
                  <AlarmAdd color="inherit" />
                </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
          <AddEventForm
            open={ this.state.open }
            handleClose={ this.handleClickClose }
            week={ this.state.currentWeek }
            handleNewEvent={ this.handleNewEvent }
          />
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentWeek: state.week.currentWeek,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getCurrentWeek,
}, dispatch);

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AppBarComponent));
