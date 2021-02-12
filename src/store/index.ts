import Vue from 'vue';
import Vuex from 'vuex';

import WineBox from './WineBox';
import Products from './Products';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    WineBox,
    Products,
  },
});
