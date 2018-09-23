import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Calendar from '../../components/Calendar';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      daysOfWeek: moment.weekdays(),
    };
  }
  render () {
    const { daysOfWeek } = this.state;
    const { times, currentWeek } = this.props;
    return (
      <div className="planner-container">
        <Calendar
          week={ currentWeek }
          daysOfWeek={ daysOfWeek }
          times={ times }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentWeek: state.week.currentWeek,
  times: state.week.times,
});

export default connect(
  mapStateToProps
)(Home);
