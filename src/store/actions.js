// global actions

export default {
  incrementAsync(context) {
    setTimeout(() => {
      context.commit('increment');
    }, 1000);
  },

  // In practice, we often use ES6 argument destructuring to simplify the code a bit
  incrementAsyncES6({ commit }) {
    setTimeout(() => {
      commit('increment');
    }, 1000);
  },
};
