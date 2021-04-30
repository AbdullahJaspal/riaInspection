import BaseUrl from '../../constants/BaseURL';
import axios from 'axios';
import * as types from './types';

// Basic types
export const HOME_PENDING = 'HOME_PENDING';
export const HOME_ERROR = 'HOME_ERROR';

export const dashboard = (onSuccess1, onError1) => {
  return async (dispatch) => {
    dispatch(homeLoading(true));
    try {
      const res = await axios.get(
        `${BaseUrl}/products`,
        {},
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      if (res) {
        dispatch(getProductsSuccess(res));
        onSuccess1(res);
      }
    } catch (err) {
      dispatch(homeError(err));
      onError1(err);
    }
  };
};

export const getProducts = (onSuccess1, onError1) => {
  return async (dispatch) => {
    dispatch(homeLoading(true));
    try {
      const res = await axios.get(
        `${BaseUrl}/products`,
        {},
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      if (res) {
        dispatch(getProductsSuccess(res));
        onSuccess1(res);
      }
    } catch (err) {
      dispatch(homeError(err));
      onError1(err);
    }
  };
};

export const getVehicals = (token, onSuccess, onError) => {
  return async (dispatch) => {
    try {
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();

      var config = {
        method: 'get',
        url: 'http://www.riainspectionsapi.development-env.com/api/searchList',
        headers: {
          key: '3d16646b0302585415cf00c922a0ceb0',
          token: `Bearer ${token}`,
          Cookie: 'ci_session=18bc437204c65a8c9d81ad99c052e47fd9b4eb59',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          onSuccess(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(homeError(err));
      onError(err);
    }
  };
};

export const getPendingReports = (token, onSuccess, onError) => {
  return async (dispatch) => {
    try {
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();

      var config = {
        method: 'get',
        url:
          'http://www.riainspectionsapi.development-env.com/api/pending-report-list',
        headers: {
          key: '3d16646b0302585415cf00c922a0ceb0',
          token: `Bearer ${token}`,
          Cookie: 'ci_session=a5725be9cd32fce77e4621db57bf560416c9813e',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          onSuccess(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(homeError(err));
      onError(err);
    }
  };
};
export const getApprovedReports = (token, onSuccess1, onError1) => {
  return async (dispatch) => {
    try {
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();

      var config = {
        method: 'get',
        url:
          'http://www.riainspectionsapi.development-env.com/api/approved-report-list',
        headers: {
          key: '3d16646b0302585415cf00c922a0ceb0',
          token: `Bearer ${token}`,
          Cookie: 'ci_session=a5725be9cd32fce77e4621db57bf560416c9813e',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          onSuccess1(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(homeError(err));
      onError1(err);
    }
  };
};

export const getGuestReminders = (onSuccess1, onError1) => {
  return async (dispatch) => {
    dispatch(homeLoading());
    try {
      const res = await axios.get(`${BaseUrl}/guest/notifications`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (res) {
        dispatch(guestRemindersSuccess(res));
        onSuccess1(res);
      }
    } catch (err) {
      dispatch(homeError(err));
      onError1(err);
    }
  };
};

export const updateProfile = (params, token, onSuccess, onError) => {
  return async (dispatch) => {
    dispatch(homeLoading());

    try {
      const res = await axios.post(
        `${BaseUrl}/profile-settings/update`,
        params,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (res) {
        dispatch(updateProdileSuccess(res));
        onSuccess(res);
      }
    } catch (err) {
      dispatch(homeError(err));
      onError(err);
    }
  };
};

export const contactUs = (params, token, onSuccess, onError) => {
  return async (dispatch) => {
    dispatch(homeLoading(true));
    console.log('...................');
    try {
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      data.append('name', params.name);
      data.append('email', params.email);
      data.append('phone_number', params.phone_number);
      data.append('message', params.message);

      var config = {
        method: 'post',
        url: 'http://www.riainspectionsapi.development-env.com/api/contact-us',
        headers: {
          key: '3d16646b0302585415cf00c922a0ceb0',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          onSuccess(response);
        })
        .catch(function (error) {
          console.log(error);
          console.log(error);
        });
    } catch (err) {
      dispatch(homeError(err));
      onSuccess(res);
    }
  };
};

// Helper Actions

export const homeLoading = (data) => ({
  type: HOME_PENDING,
  payload: data,
});

const homeError = (data) => ({
  type: HOME_ERROR,
  payload: data,
});

const getProductsSuccess = (data) => {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    payload: data,
  };
};

const setReminderSuccess = (data) => {
  return {
    type: types.SET_REMINDER_SUCCESS,
    payload: data,
  };
};

const getRemindersSuccess = (data) => {
  return {
    type: types.GET_REMINDERS_SUCCESS,
    payload: data,
  };
};

const guestRemindersSuccess = (data) => {
  return {
    type: types.GUEST_REMINDERS_SUCCESS,
    payload: data,
  };
};

const updateProdileSuccess = (data) => {
  return {
    type: types.UPDATE_PROFILE_SUCCESS,
    payload: data,
  };
};
