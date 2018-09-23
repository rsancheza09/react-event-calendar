import React from 'react';
import PropTypes from 'prop-types';

const Event = (props) => {
  return (
    <div className="event">
      {props.event.subject || ''}
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.object.isRequired,
};

export default Event;
