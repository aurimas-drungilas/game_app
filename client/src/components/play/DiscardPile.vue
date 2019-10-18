<template lang="html">
  <div>
    <p>Discard Pile</p>
    <img :src="lastCard" v-if="lastCard.length">
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  props: ['cards'],
  computed: {
    lastCard() {
      return this.cards[this.cards.length - 1].front_url;
    }
  }
}
</script>

<style lang="css" scoped>
img {
  width: 100px;
}
</style>
