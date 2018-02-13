import { defineAction } from '../utils/defineAction';

export const WEEK = defineAction(
  'WEEK',
  ['GET_CURRENT', 'SET_INITIAL', 'DECREMENT_REQUESTED', 'DECREMENT']
);
