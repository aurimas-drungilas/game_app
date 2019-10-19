<template lang="html">
  <div>
    <ul class="nav nav-pills">
      <li>
        <router-link to="/"  style="font-size: 35px; margin-left: 50px; margin-right: 50px;"><img id="logo" src="../assets/aon.png" alt="logo"></router-link>
      </li>
      <br>
      <li class="nav-item">
        <router-link class="nav-bar" to="/info" style="font-size: 35px; margin-left: 50px; margin-right: 50px;">About</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/quiz"  style="font-size: 35px; margin-left: 50px; margin-right: 50px;">Quiz</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/learn"  style="font-size: 35px; margin-left: 50px; margin-right: 50px;">Learn</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/play"  style="font-size: 35px; margin-left: 50px; margin-right: 50px;">Play</router-link>
      </li>
      <transition name="fade">
        <!-- <transition name="slide" mode="out-in"> -->
        <router-view/>
      </transition>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="css" scoped>

.nav-item {
  transition: all .5s ease-in-out;
}

.nav-item:hover {
  transform: scale(1.5);
}

ul {
  list-style: none;
  display: inline-block;
}

li {
  display: inline-block;
}

a {
  text-decoration: none;
}

#logo {
  position: relative;
  width: 90px;
  height: auto;
  transition: transform 1.5s ease-in-out;
}

#logo:hover {
  transform: rotateZ(360deg);
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.5s;
}

.fade-enter-active {
  transition-delay: 0.5s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.slide-enter-active,
.slide-leave-active
 {
  transition: transform 1s ease-out;
}
.slide-enter {
  transform: translateX(-40%);
}
.slide-leave-to {
  transform: translateX(80%);
}

.test-enter-active, .test-enter {
  transform: scale(1.5);
}
.test-leave-active, .test-leave {
  transform: scale(1);
}
</style>
