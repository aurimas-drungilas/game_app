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
  },
  methods: {
    allowToDrop(event) {
      event.preventDefault();
    }
  }
}
</script>

<style lang="css" scoped>
.discard-card {
  width: 150px;
  height: auto;
  box-shadow: 6px 6px 2px rgba(0, 0, 0, 0.6);
}

.discard-pile {
  position: relative;
  left: 9.5%;
}

p {
  font-size: 20px;
  font-weight: bolder;
  color: white;
}
</style>
