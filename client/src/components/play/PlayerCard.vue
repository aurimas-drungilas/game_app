<template lang="html">
  <div v-on:click="handleClick">
    <!-- Player Card {{card}} -->
    <img :src="card.front_url">
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  props: ['card'],
  methods: {
    handleClick() {
      eventBus.$emit('player-card-clicked', this.card);
    },
    handlePickAnimation(data) {
      if (data._id === this.card._id) {
        console.log("Do player card pick animation");
        // TODO: set up card pick animation.
      }
    },
  },
  mounted() {
    eventBus.$on('player-card-clicked', data => this.handlePickAnimation(data));
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
</style>
