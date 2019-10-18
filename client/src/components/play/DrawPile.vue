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
  },
}
</script>

<style lang="css" scoped>
img {
  width: 100px;
}
</style>
