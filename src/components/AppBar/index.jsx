import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Tooltip } from '@material-ui/core';
import { CalendarToday } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  menuButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
};

const AppBarComponent = (props) => (
  <div className="app-bar">
    <AppBar>
      <Toolbar>
        <Typography variant="title" color="inherit">Weekly Planner</Typography>
        <div className={ props.classes.menuButtons }>
          <Tooltip title="Today">
            <IconButton>
              <CalendarToday color="inherit" />
            </IconButton>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(AppBarComponent);
