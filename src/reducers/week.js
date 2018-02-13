import * as ACTIONS from '../constants/week';

const event = {
  id: 1,
  category: '',
  location: '',
  invites: [],
  description: '',
};
const times = [
  {
    id: 1,
    time: '7:00',
    event,
  },
  {
    id: 2,
    time: '7:30',
    event,
  },
  {
    id: 3,
    time: '8:00',
    event,
  },
  {
    id: 4,
    time: '8:30',
    event,
  },
  {
    id: 5,
    time: '9:00',
    event,
  },
  {
    id: 6,
    time: '9:30',
    event,
  },
  {
    id: 7,
    time: '10:00',
    event,
  },
  {
    id: 8,
    time: '10:30',
    event,
  },
  {
    id: 9,
    time: '11:00',
    event,
  },
  {
    id: 10,
    time: '11:30',
    event,
  },
  {
    id: 11,
    time: '12:00',
    event,
  },
  {
    id: 12,
    time: '12:30',
    event,
  },
  {
    id: 13,
    time: '13:00',
    event,
  },
  {
    id: 14,
    time: '13:30',
    event,
  },
  {
    id: 15,
    time: '14:00',
    event,
  },
  {
    id: 16,
    time: '14:30',
    event,
  },
  {
    id: 17,
    time: '15:00',
    event,
  },
  {
    id: 18,
    time: '15:30',
    event,
  },
  {
    id: 19,
    time: '16:00',
    event,
  },
  {
    id: 20,
    time: '16:30',
    event,
  },
  {
    id: 21,
    time: '17:00',
    event,
  },
  {
    id: 22,
    time: '17:30',
    event,
  },
  {
    id: 23,
    time: '18:00',
    event,
  },
];
const initialState = {
  weeks: [],
  currentWeek: [
    {
      id: 1,
      day: 'Sunday',
      times,
      weekend: true,
    },
    {
      id: 2,
      day: 'Monday',
      times,
      weekend: false,
    },
    {
      id: 3,
      day: 'Tuesday',
      times,
      weekend: false,
    },
    {
      id: 4,
      day: 'Wednesday',
      times,
      weekend: false,
    },
    {
      id: 5,
      day: 'Thursday',
      times,
      weekend: false,
    },
    {
      id: 6,
      day: 'Friday',
      times,
      weekend: false,
    },
    {
      id: 7,
      day: 'Saturday',
      times,
      weekend: false,
    },
  ],
};

function week (state = initialState, action) {
  switch (action.type) {
    case ACTIONS.WEEK.SET_INITIAL:
      return {
        ...state,
        weeks: [
          ...state.weeks,
          action.payload.currentWeek,
        ],
      };

    default:
      return state;
  }
}
export default week;
