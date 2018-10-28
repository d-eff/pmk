import Auth from '../../api/authService';

const state = {
  token: '',
};

/* eslint-disable */
const mutations = {
  setToken(state, token) {
    state.token = token;
  },
};

const actions = {
  //holy cow, es6 obj destructuring
  async login ({ commit }, { username, password }) {
    return Auth.login(username, password).then((response) => {
      commit('setToken', response.data.token);
    });
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
