<template lang="html">
  <div class="discard-pile">
    <p>Discard Pile</p>
    <img class="discard-card" :src="lastCard" v-if="lastCard.length">
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
.discard-card {
  width: 150px;
  height: auto;
  box-shadow: 6px 6px 5px grey;
}

.discard-pile {
  position: relative;
  left: 9.5%;
}
</style>
