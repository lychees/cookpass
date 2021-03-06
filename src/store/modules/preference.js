import * as types from '../types';

const state = {
  lang: (navigator.language || navigator.browserLanguage).toLowerCase(),
};

const getters = {
};

const actions = {
};

const mutations = {
  [types.SET_LANG]: (vuexState, lang) => {
    vuexState.lang = lang;
  },
  [types.WIPE_LANG]: (vuexState) => {
    vuexState.lang = (navigator.language || navigator.browserLanguage).toLowerCase();
  },
};

export default {
  namespace: 'preference/',
  state,
  getters,
  actions,
  mutations,
};
