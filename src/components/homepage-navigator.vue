<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="@/assets/logo.png" style="width: auto; height: 28px;">
      </router-link>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" :class="{'is-active': isActive}" @click="toggleNavigator">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isActive}">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link to="/features" class="navbar-item">Features</router-link>
          <div class="navbar-dropdown">
            <router-link to="/features" class="navbar-item">All Features</router-link>
            <router-link to="/features/various-channel" class="navbar-item">Various channel</router-link>
          </div>
        </div>
        <router-link to="/pricing" class="navbar-item">Pricing</router-link>
      </div>
      <div class="navbar-end">
        <router-link to="/help" class="navbar-item">Help center</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'homepage-navigator',
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleNavigator() {
      this.isActive = !this.isActive
    },
  },
};
</script>
