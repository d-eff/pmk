import API from './api';

export default {
  async getWorlds() {
    return API.get('/worlds');
  },
};
