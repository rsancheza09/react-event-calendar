import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = ({ palette }) => ({
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: palette.background.default,
    },
  },
});
const Timer = (props) => (
  props.hours.map((hour, key) => (
    <TableRow key={ `${key}-${hour}` } className={ props.classes.row }>
      <TableCell>{hour}</TableCell>
    </TableRow>
  ))
);

Timer.propTypes = {
  hours: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Timer);
