import API from './api';

export default {
  async login(username, password) {
    return API().post('/login', {
      username,
      password,
    });
  },
};
