import { AUTH_CLIENT_ID, AUTH_DOMAIN } from '../config';
import { AUTH, LOGIN, LOGOUT } from './';

let lock;
if (typeof window !== 'undefined') {
  lock = new Auth0Lock(AUTH_CLIENT_ID, AUTH_DOMAIN);
}

export function login() {
  return async (dispatch) => {
    lock.show();
  };
}

export function authenticate() {
  return async (dispatch) => {
    lock.on('authenticated', (authResult) => {
      lock.getUserInfo(authResult.accessToken, (err, profile) => {
        if (err) {
          console.log('oh no');
          dispatch({
            type: LOGIN,
            data: {
              status: false,
              errMsg: 'Sumthin bad happened',
            },
          });
          return;
        }

        localStorage.setItem('accessToken', authResult.accessToken);
        localStorage.setItem('profile', JSON.stringify(profile));
        dispatch({
          type: LOGIN,
          data: {
            status: true,
            errMsg: '',
          },
        });
      });
    });
  };
}

export function loginer() {
  return async (dispatch) => {
    dispatch({
      type: LOGIN,
    });
  };
}

export function logout() {
  return async (dispatch) => {
    dispatch({
      type: LOGOUT,
      data: {
        errorMsg: '',
      },
    });
  };
}
