import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import todos from './modules/todos.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    users: [],
  },
  getters: {
    // You can think of these as computed properties for stores.
    doubleCount(state) {
      return state.count * 2;
    },
  },
  mutations,
  actions,
  modules: {
    // this can access `state.todos.list`
    todos,
  },
});
