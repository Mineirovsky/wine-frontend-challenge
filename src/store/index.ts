import Vue from 'vue';
import Vuex from 'vuex';

import WineBox from './WineBox';
import Products from './Products';
import Cart from './Cart';

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
    Cart,
  },
});
