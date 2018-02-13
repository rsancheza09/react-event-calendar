import * as ACTIONS from '../constants/week';

export const getCurrentWeek = () => {
  return (dispatch, getState) => {
    const { currentWeek } = getState().week;
    if (!getState().week.weeks.lenght) {
      dispatch({
        type: ACTIONS.WEEK.SET_INITIAL,
        payload: {
          currentWeek,
        },
      });
    }
    return getState().week.weeks.slice(-1);
  };
};
