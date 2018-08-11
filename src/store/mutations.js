// global mutations

export default {
  increment(state) {
    state.count += 1;
  },
  updateUsers(state, users) {
    state.users = users.slice();
  },
};
