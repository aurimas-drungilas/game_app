<template lang="html">
  <div>
    <p>Draw pile</p>
    <img :src="lastCard">
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  props: ['cards'],
  computed: {
    lastCard() {
      return this.cards[this.cards.length - 1].back_url;
    }
  }
}
</script>

<style lang="css" scoped>
img {
  width: 100px;
}
</style>
