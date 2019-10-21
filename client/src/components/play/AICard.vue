<template lang="html">
  <div>
    <img :src="card.back_url">
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  props: ['card'],
  methods: {
    handlePickAnimation(data) {
      if (data._id === this.card._id) {
        console.log("Do AI card pick animation");
        // TODO: set up card pick animation.
      }
    },
  },
  mounted() {
    eventBus.$on('ai-card-picked', data => this.handlePickAnimation(data));
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
