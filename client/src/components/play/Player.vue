<template lang="html">
  <div>
    <p>Player cards</p>
    <PlayerCards v-bind:cards="cards"></PlayerCards>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import PlayerCards from '@/components/play/PlayerCards.vue';

export default {
  props: ['cards'],
  components: {
    PlayerCards
  },
}
</script>

<style lang="css" scoped>
</style>
