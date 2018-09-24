import { defineAction } from '../utils/defineAction';

export const WEEK = defineAction(
  'WEEK',
  ['GET_CURRENT', 'SET_INITIAL', 'SET_NEW_EVENT']
);
