import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Week from '../../components/Week';

const styles = {
  paper: {
    width: '100%',
  },
};
const Calendar = (props) => {
  const { daysOfWeek, times, week, classes } = props;
  const headers = ['Time', ...daysOfWeek];
  return (
    <Paper className={ classes.paper }>
      <Table>
        <TableHead>
          <TableRow>
            {
              headers.map((head, key) => (
                <TableCell key={ `${key}-${head}` }>{ head }</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          <Week data={ week } times={ times } />
        </TableBody>
      </Table>
    </Paper>
  );
};

Calendar.propTypes = {
  week: PropTypes.array.isRequired,
  daysOfWeek: PropTypes.array.isRequired,
  times: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Calendar);
