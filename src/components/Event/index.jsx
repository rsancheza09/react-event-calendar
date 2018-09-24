import React from 'react';
import PropTypes from 'prop-types';

const Event = (props) => {
  return (
    <div className="event">
      Event
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.object,
};

export default Event;
