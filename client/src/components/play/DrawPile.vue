<template lang="html">
  <div v-on:click="handleClick" class="draw-pile">
    <p>Draw pile</p>
    <img class="draw-card" :src="lastCard.back_url">
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
.draw-pile:hover {
  cursor: pointer;
}
.draw-card {
  position: relative;
  left: 12%;
  width: 150px;
  height: auto;
  box-shadow: 6px 6px 2px rgba(0, 0, 0, 0.6);
}

p {
  font-size: 20px;
  font-weight: bolder;
  color: white;
  position: relative;
  left: 20px;
}
</style>
