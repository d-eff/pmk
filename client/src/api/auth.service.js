import API from './api';

export default {
  async login(username, password) {
    return API().post('/login', {
      username,
      password,
    });
  },
  async signup(user) {
    return API().post('/signup', user);
  },
};
