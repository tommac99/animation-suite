import { combineReducers } from 'redux';
import { user } from './user';
import { UserState } from '../types/user';

export type MainAppState = { user: UserState };

export const rootReducer = combineReducers<any>({
  user,
});
