import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import Day from '../Day';

const WeekComponent = (props) => {
  const { daysOfWeek, theme } = props;

  const styles = {
    week: {
      backgroundColor: theme.palette.secondary[500],
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%',
    },
  };
  const week = daysOfWeek.map((day, key) => {
    return {
      id: key,
      day,
      events: [],
      weekend: day === 'Saturday' || day === 'Sunday',
    };
  });
  return (
    <div className="week" style={ styles.week }>
      {
        week.map((day) => <Day data={ day } key={ day.id } />)
      }
    </div>
  );
};

export default withTheme()(WeekComponent);
