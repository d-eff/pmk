import Auth from '../../api/auth.service';

const state = {
  token: '',
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
};

const actions = {
  async login({ commit }, { username, password }) {
    try {
      const response = await Auth.login(username, password);
      commit('setToken', response.data.token);
      return response.data.token;
    } catch (err) {
      return err;
    }
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
