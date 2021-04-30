import BaseUrl from '../../constants/BaseURL';
import axios from 'axios';
import * as types from './types';

// Basic types
export const AUTH_PENDING = 'AUTH_PENDING';
export const AUTH_ERROR = 'AUTH_ERROR';

export const login = (params, onSuccess, onError) => {
  return async (dispatch) => {
    dispatch(authLoading(true));
    try {
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      data.append('email', params.email);
      data.append('password', params.password);

      var config = {
        method: 'post',
        url:
          'http://www.riainspectionsapi.development-env.com/api/login-user?key=3d16646b0302585415cf00c922a0ceb0',
        headers: {
          key: '3d16646b0302585415cf00c922a0ceb0',
          Cookie: 'ci_session=3abb898dd964903d0528cb39c033dbbd55630133',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          dispatch(authLoading(false));
          dispatch(loginSuccess(response.data.data));
          onSuccess(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(authError(err));
      dispatch(authLoading(false));
      onError(err);
    }
  };
};

export const forgetPassword = (params, onSuccess, onError) => {
  return async (dispatch) => {
    dispatch(authLoading(true));
    try {
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      data.append('email', params.email);

      var config = {
        method: 'post',
        url:
          'http://www.riainspectionsapi.development-env.com/api/forgotsubmit',
        headers: {
          key: '3d16646b0302585415cf00c922a0ceb0',
          Cookie: 'ci_session=3abb898dd964903d0528cb39c033dbbd55630133',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          dispatch(authLoading(false));
          onSuccess(response);
          dispatch(guestTokenSuccess(res));
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(authError(err));
      dispatch(authLoading(false));
      onError(err);
    }
  };
};

export const adminLogin = (params, onSuccess, onError) => {
  return async (dispatch) => {
    dispatch(authLoading(true));
    try {
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      data.append('email', params.email);
      data.append('password', params.password);

      var config = {
        method: 'post',
        url: `${BaseUrl}/admin/login`,
        headers: {
          key: '3d16646b0302585415cf00c922a0ceb0',
          Cookie: 'ci_session=3abb898dd964903d0528cb39c033dbbd55630133',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          dispatch(authLoading(false));
          onSuccess(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(authError(err));
      dispatch(authLoading(false));
      onError(err);
    }
  };
};

export const adminForgetPassword = (params, onSuccess, onError) => {
  return async (dispatch) => {
    dispatch(authLoading(true));
    try {
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      data.append('email', params.email);

      var config = {
        method: 'post',
        url: `${BaseUrl}/add-user`,
        headers: {
          key: '3d16646b0302585415cf00c922a0ceb0',
          Cookie: 'ci_session=3abb898dd964903d0528cb39c033dbbd55630133',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          dispatch(authLoading(false));
          dispatch(guestTokenSuccess(res));
          onSuccess(response);
        })
        .catch(function (error) {
          dispatch(authLoading(false));
          console.log(error);
        });
    } catch (err) {
      dispatch(authError(err));
      dispatch(authLoading(false));
      onError(err);
    }
  };
};

export const saveGuestToken = (params, onSuccess, onError) => {
  return async (dispatch) => {
    dispatch(authLoading(true));
    try {
      const res = await axios.post(`${BaseUrl}/guest/firebase-token`, params);
      if (res) {
        dispatch(loginSuccess(res));
        onSuccess(res);
      }
    } catch (err) {
      dispatch(authError(err));
      onError(err);
    }
  };
};

export const register = (params, onSuccess, onError) => {
  return async (dispatch) => {
    try {
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      data.append('name', params.name);
      data.append('email', params.email);
      data.append('password', params.password);
      data.append('c_password', params.c_password);

      var config = {
        method: 'post',
        url: `${BaseUrl}/add-user`,
        headers: {
          key: '3d16646b0302585415cf00c922a0ceb0',
          Cookie: 'ci_session=3abb898dd964903d0528cb39c033dbbd55630133',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          dispatch(registerSuccess(response));
          onSuccess(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(authError(err));
      onError(err);
    }
  };
};

export const logout = (token, onSuccess, onError) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${BaseUrl}/logout`,
        {},
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (res) {
        dispatch(logoutSuccess(res));

        onSuccess(res);
      }
    } catch (err) {
      dispatch(authError(err));
      onError(err);
    }
  };
};

export const sendEmail = (params, onSuccess, onError) => {
  return async (dispatch) => {
    dispatch(authLoading());
    try {
      const res = await axios.post(`${BaseUrl}/forget-password`, params, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (res) {
        dispatch(sendEmailSuccess(res));
        onSuccess(res);
      }
    } catch (err) {
      dispatch(authError(err));
      onError(err);
    }
  };
};

export const changePass = (params, onSuccess, onError) => {
  return async (dispatch) => {
    dispatch(authLoading());
    try {
      const res = await axios.post(`${BaseUrl}/reset-password`, params, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (res) {
        dispatch(changePassSuccess(res));
        onSuccess(res);
      }
    } catch (err) {
      dispatch(authError(err));
      onError(err);
    }
  };
};

// Helper Actions

export const authLoading = (data) => ({
  type: AUTH_PENDING,
  payload: data,
});

const authError = (data) => ({
  type: AUTH_ERROR,
  payload: data,
});

export const loginSuccess = (data) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: data,
  };
};
export const adminLoginSuccess = (data) => {
  return {
    type: types.ADMIN_LOGIN_SUCCESS,
    payload: data,
  };
};

const guestTokenSuccess = (data) => {
  return {
    type: types.GUEST_TOKEN_SUCCESS,
    payload: data,
  };
};

const registerSuccess = (data) => {
  return {
    type: types.REGISTER_SUCCESS,
    payload: data,
  };
};

const logoutSuccess = (data) => {
  return {
    type: types.LOGOUT_SUCCESS,
    payload: data,
  };
};

const sendEmailSuccess = (data) => {
  return {
    type: types.SEND_EMAIL_SUCCESS,
    payload: data,
  };
};

const changePassSuccess = (data) => {
  return {
    type: types.CHANGE_PASS_SUCCESS,
    payload: data,
  };
};
