<template>
  <div class="container">
    <div v-if="isLoading">
      <p>Loading...</p>
    </div>

    <div v-if="error">
      <p>Error: {{ error }}</p>
    </div>

    <div v-if="user">
      <h3>{{ user.name }}</h3>
      <h4>@{{ user.username }}</h4>
      <p>Email : {{ user.email }}</p>
      <p>
        <router-link to="/">Home page</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { getUser } from '@/middleware/user';

export default {
  name: 'user',
  data() {
    return {
      isLoading: false,
      user: null,
      error: null,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    '$route'() {
      this.fetchData();
    },
  },
  methods: {
    fetchData() {
      this.error = this.user = null;
      this.isLoading = true;

      getUser(this.$route.params.id)
        .then((response) => {
          this.user = response.data;
        })
        .catch((error) => {
          this.error = error.toString();
        })
        .then(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
.user {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>
