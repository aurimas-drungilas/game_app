<template>
  <div id="app">
    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
#app {
  font-family: 'Cormorant Garamond', serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
