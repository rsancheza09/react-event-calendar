import React from 'react';
import { Typography, Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Event from '../Event';

const styles = ({ palette }) => ({
  root: {
    backgroundColor: palette.secondary[50],
  },
  subHeading: {
    color: '#000',
  },
  events: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: palette.background.default,
    },
    '&.weekend': {
      backgroundColor: palette.secondary[800],
    },
  },
});
const Day = (props) => {
  const rowStyle = `${props.classes.row} ${props.data.weekend ? 'weekend' : ''}`;
  return (
    <Table className={ props.classes.root }>
      <TableHead>
        <TableRow className={ rowStyle }>
          <TableCell>
            <Typography
              variant="subheading"
              className={ props.classes.subHeading }
            >
              {props.data.day}
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow className={ rowStyle }>
          <TableCell>
            <div className={ props.classes.events }>
              <Event />
              <Event />
            </div>
          </TableCell>
        </TableRow>
        <TableRow className={ rowStyle }>
          <TableCell>
            <div className={ props.classes.events }>
              <Event />
              <Event />
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default withStyles(styles)(Day);
