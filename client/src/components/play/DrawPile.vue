<template lang="html">
  <div v-on:click="handleClick">
    <p>Draw pile</p>
    <img :src="lastCard.back_url">
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  props: ['cards'],
  computed: {
    lastCard() {
      return this.cards[this.cards.length - 1];
    },
  },
  methods: {
    handleClick() {
      eventBus.$emit('draw-pile-clicked', this.lastCard);
    },
    handlePlayerDrawEvent(data) {
      console.log("Player draw animation");
      // TODO: Do Player draw animation
    },
    handleAIDrawEvent(data) {
      console.log("AI draw animation");
      // TODO: Do AI draw animation
    },
  },
  mounted() {
    eventBus.$on('player-draw-picked', data => this.handlePlayerDrawEvent(data));
    eventBus.$on('ai-draw-picked', data => this.handleAIDrawEvent(data));
  },
}
</script>

<style lang="css" scoped>
div:hover {
  cursor: pointer;
}
img {
  width: 100px;
}
</style>
