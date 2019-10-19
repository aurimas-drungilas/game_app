<template lang="html">
  <div>
    <ul class="nav-bar">
      <li>
        <router-link to="/"><img id="logo" src="../assets/aon.png" alt="logo"></router-link>
      </li>
      <br>
      <li class="nav-item red">
        <router-link to="/info">About</router-link>
      </li>
      <li class="nav-item yellow">
        <router-link to="/quiz">Quiz</router-link>
      </li>
      <li class="nav-item blue">
        <router-link to="/learn">Learn</router-link>
      </li>
      <li class="nav-item green">
        <router-link to="/play">Play</router-link>
      </li>
      <transition name="fade" mode="out-in">
        <!-- <transition name="slide" mode="out-in"> -->
        <!-- <transition name="test" mode="out-in"> -->
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
  color: #264726;
  font-size: 35px;
  margin-left: 40px;
  margin-right: 40px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 15px;
  border-style: hidden;
}

.nav-item:hover {
  transform: scale(1.5);
  transition-duration: 0.5s;
  letter-spacing: 7px;
  /* background-color: lightgrey; */
}

.nav-bar {
  list-style: none;
  display: inline-block;
}

li {
  display: inline-block;
}

.nav-item > a:active {
  color: #264726;
  text-decoration: none;
}

.nav-item > a:link {
  color: #264726;
  text-decoration: none;
}

.nav-item > a:visited {
  color: #264726;
  text-decoration: none;
}

/* .red > a:hover {
  color: #af0606;
}

.yellow > a:hover {
  color: #b2a000;
}

.blue > a:hover {
  color: #060f89;
} */

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
  transition-duration: 0.3s;
}

.fade-enter-active {
  transition-delay: 0.3s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

/* .slide-enter-active,
.slide-leave-active
 {
  transition: transform 1.2s ease-out;
}
.slide-enter {
  transform: translateZ(-10%);
}
.slide-leave-to {
  transform: translateZ(10%);
} */

/* .test-enter-active, .test-leave-active {
  transition-property: opacity;
  transition-duration: 0.5s;
}

.test-enter-active {
  transition-delay: 0.2s;
}

.test-enter {
  opacity: 0;
}

.test-leave-active {
  opacity: 0;
} */
</style>
