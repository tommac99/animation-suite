import { UserActionTypes, UserState, USER_LOGIN } from '../../types/user';

const defaultState: UserState = {
  isLoggedIn: false,
};

export const user = (
  state = defaultState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};
