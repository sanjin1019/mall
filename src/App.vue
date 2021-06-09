<template>
  <div id="app">
    <router-view></router-view>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue';
export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
</style>
