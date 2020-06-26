import { UserActionTypes, USER_LOGIN } from '../../types/user';

export const userLogin = (): UserActionTypes => ({
  type: USER_LOGIN,
  payload: {},
});
