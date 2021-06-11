<template>
  <div id="app">
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from './components/common/footerbar/FooterBar.vue';
export default {
  name: 'app',
  components: {
    FooterBar
  }
}
</script>

<style>
</style>
