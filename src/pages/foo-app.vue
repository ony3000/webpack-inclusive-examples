<template>
  <div id="app">
    <img src="@/assets/logo.png">
    <div>
      <!-- user list can be component -->
      <h2>Users</h2>
      <p>This users display regardless of router.</p>
      <ul class="users">
        <li v-for="user in users" :key="user.id">
          <router-link :to="'/users/'+user.id">{{ user.name }}</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
import '@/assets/main.css';
import { mapState } from 'vuex';
import { getUsers } from '@/middleware/user';

export default {
  name: 'foo-app',
  computed: {
    ...mapState([
      'users',
    ]),
  },
  mounted() {
    getUsers()
      .then((response) => {
        this.$store.commit('updateUsers', response.data);
      })
      .catch((error) => {
        console.error(error);
      })
  },
  watch: {
    '$route'(to, from) {
      // execute after `after-each` guard
    },
  },
}
</script>

<style scoped>
.users {
  list-style-type: none;
  padding: 0;
}
.users li a {
  display: inline-block;
  width: 200px;
  border: 1px #ddd solid;
  padding: 10px;
  text-align: left;
  color: #222;
  text-decoration: none;
}
.users li a:hover {
  color: orange;
}
</style>
