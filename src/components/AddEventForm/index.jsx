import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  InputAdornment,
  MenuItem,
} from '@material-ui/core';
import { LocationOn } from '@material-ui/icons';

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
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }
  render () {
    const { open, handleClose, week } = this.props;
    console.log(week);
    return (
      <Dialog
        open={ open }
        onClose= { handleClose }
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add new event information
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="subject"
            label="Subject"
            type="text"
            fullWidth
            onChange={ this.handleChange('subject') }
          />
          <TextField
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
          >
            {categories.map(option => (
              <MenuItem key={ option.value } value={ option.value }>
                { option.label }
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
      </Dialog>
    );
  }
}

AddEventForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  week: PropTypes.array.isRequired,
};

export default AddEventForm;
