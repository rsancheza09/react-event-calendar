'use strict';

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
    const { currentWeek } = this.state;
    return (
      <div className="planner-container">
        <Calendar week={ currentWeek } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentWeek: state.week.currentWeek,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getCurrentWeek,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
