import API from './api';

export default {
  async getFactions(worldId) {
    return API().get(`/factions/${worldId}`);
  },
  async getFaction(factionId) {
    return API().get(`/factions/${factionId}`);
  },

};
