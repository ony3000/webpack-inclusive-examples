<template>
  <transition name="fade" mode="out-in">
    <router-view class="container"/>
  </transition>
</template>

<script>
export default {
  name: 'homepage-app',
}
</script>
