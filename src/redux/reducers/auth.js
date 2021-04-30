import * as types from '../actions/types';
import {AUTH_PENDING, AUTH_ERROR} from '../actions/auth';

const initialState = {
  isSuccess: false,
  error: false,
  isLoading: false,
  token: null,
  userData: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_PENDING:
      console.log(action.payload);
      return {
        ...state,
        isLoading: action.payload,
      };
    case AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        error: action.payload,
      };
    case types.LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isSuccess: true,
        token: action.payload.token,
        userData: action.payload,
      };
    case types.ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        token: action.payload.token,
        userData: action.payload,
      };

    case types.GUEST_TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    case types.SEND_EMAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    case types.CHANGE_PASS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    default:
      return state;
  }
};
