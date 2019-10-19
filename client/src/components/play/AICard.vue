<template lang="html">
  <div v-on:click="handleClick">
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
  },
}
</script>

<style lang="css" scoped>
div {
  display: inline-block;
}
img {
  width: 100px;
}
</style>
