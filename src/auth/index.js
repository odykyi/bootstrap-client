import { router } from '../index';
import axios from 'axios';

const API_URL = 'http://localhost:1337/auth';
const LOGIN_URL = `${API_URL}/local`;
const REGISTER_URL = `${API_URL}/local/register`;

export default {
  user: {
    authenticated: false,
  },

  loginOrSignup(action, context, creds, redirect) {
    let url = '';
    switch (action) {
      case 'login':
        url = LOGIN_URL;
        break;
      case 'signup':
        url = REGISTER_URL;
        break;
      default:
        url = LOGIN_URL;
    }
    axios.post(url, creds)
      .then((response) => {
        console.log('response', response)
        console.log('response.data', response.data)
        localStorage.setItem('id_token', response.data.id_token);

        this.user.authenticated = true;

        if (redirect) {
          router.push(redirect);
        } else {
          router.push('/');
        }
      })
      .catch((err) => {
        context.error = err.response.data;
      });
  },

  logout() {
    localStorage.removeItem('id_token');
    this.user.authenticated = false;
  },

  checkAuth() {
    const jwt = localStorage.getItem('id_token');

    if (jwt) {
      this.user.authenticated = true;
    } else {
      this.user.authenticated = false;
    }
  },

  getAuthHeader() {
    return {
      Authorization: `Bearer ${localStorage.getItem('id_token')}`,
    };
  },
}
