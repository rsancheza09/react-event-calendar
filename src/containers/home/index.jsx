import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  getCurrentWeek,
} from '../../actions/week';
import Calendar from '../../components/Calendar';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      daysOfWeek: moment.weekdays(),
      currentWeek: props.getCurrentWeek(),
    };
  }
  render () {
    const { currentWeek, daysOfWeek } = this.state;
    const { times } = this.props;
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getCurrentWeek,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
