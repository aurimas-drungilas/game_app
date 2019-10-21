<template lang="html">
  <div v-on:click="handleClick" :class="{'slide-top': animate}">
    <!-- Player Card {{card}} -->
    <img :src="card.front_url">
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  data() {
    return {
      animate: false,
    }
  },
  props: ['card'],
  methods: {
    handleClick() {
      eventBus.$emit('player-card-clicked', this.card);
    },
    handlePickAnimation(data) {
      if (data._id === this.card._id) {
        console.log("Do player card pick animation");
        this.animate = true;
      }
    },
  },
  mounted() {
    eventBus.$on('player-card-picked', data => this.handlePickAnimation(data));
  },
}
</script>

<style lang="css" scoped>
div {
  display: inline-block;
}
div:hover {
  cursor: pointer;
}
img {
  width: 100px;
}

.slide-top {
	-webkit-animation: slide-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 0.4s, opacity 0.4s linear;
}
@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
  }
}
@keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
  }
}
</style>
