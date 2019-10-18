<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/info">About</router-link>
    <router-link to="/quiz">Quiz</router-link>
    <router-link to="/learn">Learn</router-link>
    <router-link to="/play">Play</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
