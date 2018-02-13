import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Timer from '../../components/Timer';
// import Week from '../../components/Week';
const Calendar = (props) => {
  const headers = ['Time', ...props.daysOfWeek];
  return (
    <Paper>
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
          <Timer hours={ props.hours } />
        </TableBody>
      </Table>
    </Paper>
  );
};

Calendar.propTypes = {
  hours: PropTypes.array.isRequired,
  daysOfWeek: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles()(Calendar);
