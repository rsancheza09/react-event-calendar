import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';

import Event from '../Event';

const styles = {};

const WeekComponent = (props) => {
  const { times, data } = props;
  const dayTimes = _.map(data, (day, key) => day.times);

  return _.map(times, (time, key) => (
    <TableRow key={ `${key}-${time}` }>
      <TableCell>{time.time}</TableCell>
      {
        _.map(dayTimes, (dayTime, k) => _.map(dayTime, hour => {
          if (time.time === hour.time) {
            return (
              <TableCell key={ `${k}-${hour.time}` }>
                <Event event={ hour.event } />
              </TableCell>
            );
          }
        }))
      }
    </TableRow>
  ));
};

WeekComponent.propTypes = {
  times: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default withStyles(styles)(WeekComponent);
