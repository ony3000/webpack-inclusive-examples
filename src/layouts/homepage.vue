<template>
  <div>
    <homepage-navigator/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import HomepageNavigator from '@/components/homepage-navigator'

export default {
  name: 'homepage-layout',
  components: {
    HomepageNavigator,
  },
};
</script>
