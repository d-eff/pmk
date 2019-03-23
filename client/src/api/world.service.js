import API from './api';

// todo: use one instance of axios?
export default {
  async getWorlds() {
    return API().get('/worlds');
  },
  async getWorld(id) {
    return API().get(`/worlds/${id}`);
  },
  async createWorld(world) {
    return API().post('/world', world);
  },
  async updateWorld(world) {
    return API().put(`/world/${world.id}`, world);
  },
};
