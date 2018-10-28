import Api from './api';

export default {
  async login(username, password) {
    return Api().post('/login', {
      username,
      password,
    });
  },
};
