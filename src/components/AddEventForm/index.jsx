import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  InputAdornment,
  MenuItem,
  Button,
} from '@material-ui/core';
import { LocationOn } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  select: {
    marginRight: '20px',
    '&:last-child': {
      marginRight: '0',
    },
  },
};

const categories = [
  {
    value: 'meeting',
    label: 'Meeting',
  },
  {
    value: 'doctorAppointment',
    label: 'Doctor Appointment',
  },
  {
    value: 'lunch',
    label: 'Lunch',
  },
  {
    value: 'workout',
    label: 'Workout',
  },
];
class AddEventForm extends Component {
  state = {
    subject: '',
    description: '',
    location: '',
    category: 'meeting',
    date: moment().format('dddd'),
    time: '7:00',
    subjectError: false,
    descriptionError: false,
    locationError: false,
  }

  resetFields = () => {
    this.setState({
      subject: '',
      description: '',
      location: '',
      category: 'meeting',
      date: moment().format('dddd'),
      time: '7:00',
      subjectError: false,
      descriptionError: false,
      locationError: false,
    });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  handleErrorField = ({ name, error }) => {
    this.setState({
      [name]: error,
    });
  }

  handleClose = () => {
    this.resetFields();
    this.props.handleClose();
  }
  handleSave = () => {
    const { subject, description, location } = this.state;
    let hasError = false;
    if (!subject) {
      this.handleErrorField({ name: 'subjectError', error: true });
      hasError = true;
    } else {
      this.handleErrorField({ name: 'subjectError', error: false });
      hasError = false;
    }
    if (!description) {
      this.handleErrorField({ name: 'descriptionError', error: true });
      hasError = true;
    } else {
      this.handleErrorField({ name: 'descriptionError', error: false });
      hasError = false;
    }
    if (!location) {
      this.handleErrorField({ name: 'locationError', error: true });
      hasError = true;
    } else {
      this.handleErrorField({ name: 'locationError', error: false });
      hasError = false;
    }
    if (!hasError) {
      this.props.handleNewEvent(this.state);
      this.props.handleClose();
    }
  }
  getDayList = () => _.map(this.props.week, day => {
    return { value: day.day, label: day.day };
  })
  getTimeAvailable = () => {
    let timeAvailable;
    _.forEach(this.props.week, weekDay => {
      if (weekDay.day === this.state.date) {
        timeAvailable = _.map(weekDay.times, time => {
          return {
            value: !time.event && time.time,
            label: !time.event && time.time,
          };
        });
      }
    });
    return timeAvailable;
  }
  render () {
    const { open, classes } = this.props;
    const days = this.getDayList();
    const timeAvailable = this.getTimeAvailable();
    return (
      <Dialog
        open={ open }
        onClose= { this.handleClose }
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add new event information
          </DialogContentText>
          <TextField
            error={ this.state.subjectError }
            autoFocus
            margin="dense"
            id="subject"
            label="Subject"
            type="text"
            fullWidth
            onChange={ this.handleChange('subject') }
          />
          <TextField
            error={ this.state.descriptionError }
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            multiline
            rows={ 3 }
            onChange={ this.handleChange('description') }
          />
          <TextField
            error={ this.state.locationError }
            margin="dense"
            id="location"
            label="Location"
            type="text"
            fullWidth
            InputProps={ {
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOn />
                </InputAdornment>
              ),
            } }
            onChange={ this.handleChange('location') }
          />
          <TextField
            id="standard-select-category"
            select
            label="Category"
            value={ this.state.category }
            onChange={ this.handleChange('category') }
            helperText="Please select a category"
            margin="normal"
            className={ classes.select }
          >
            {categories.map(option => (
              <MenuItem key={ option.value } value={ option.value }>
                { option.label }
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-select-date"
            select
            label="Day of Week"
            value={ this.state.date }
            onChange={ this.handleChange('date') }
            helperText="Please select a day"
            margin="normal"
            className={ classes.select }
          >
            {days.map(option => (
              <MenuItem key={ option.value } value={ option.value }>
                { option.label }
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-select-time"
            select
            label="Time of Day"
            value={ this.state.time }
            onChange={ this.handleChange('time') }
            helperText="Please select a time"
            margin="normal"
            className={ classes.select }
          >
            {timeAvailable.map(option => (
              <MenuItem key={ option.value } value={ option.value }>
                { option.label }
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={ this.handleClose } color="primary">
              Cancel
          </Button>
          <Button onClick={ this.handleSave } color="primary">
              Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

AddEventForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  week: PropTypes.array.isRequired,
  handleNewEvent: PropTypes.func.isRequired,
};

export default withStyles(styles)(AddEventForm);
