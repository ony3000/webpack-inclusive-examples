<template>
  <div>
    <homepage-navigator/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
// this will replace to `HelpcenterNavigator`
import HomepageNavigator from '@/components/homepage-navigator'

export default {
  name: 'helpcenter-layout',
  components: {
    HomepageNavigator,
  },
};
</script>
