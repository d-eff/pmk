import Api from './api';

export default {
  login(username, password) {
    return Api().post('/login', {
      username,
      password,
    });
  },
};
