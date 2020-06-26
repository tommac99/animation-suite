export type UserState = {
  isLoggedIn: boolean;
};

export const USER_LOGIN = 'USER/LOGIN';

interface UserLginAction {
  type: typeof USER_LOGIN;
  payload: {};
}

export type UserActionTypes = UserLginAction;
