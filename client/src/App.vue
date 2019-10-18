<template>
  <div id="app">
    <router-link to="/"  style="font-size: 35px; margin-left: 50px; margin-right: 50px;"><img src="./assets/aon.png" alt=""> </router-link><br>
    <router-link to="/info" style="font-size: 35px; margin-left: 50px; margin-right: 50px;">About</router-link>
    <router-link to="/quiz"  style="font-size: 35px; margin-left: 50px; margin-right: 50px;">Quiz</router-link>
    <router-link to="/learn"  style="font-size: 35px; margin-left: 50px; margin-right: 50px;">Learn</router-link>
    <router-link to="/play"  style="font-size: 35px; margin-left: 50px; margin-right: 50px;">Play</router-link>
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
  font-family: 'Cormorant Garamond', serif;
  /* background-color: #c5dfc5; */
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

a {
  text-decoration: none;
}

img {
  position: relative;
  width: 90px;
  height: auto;
}
</style>
