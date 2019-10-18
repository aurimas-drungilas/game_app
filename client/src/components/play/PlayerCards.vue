<template lang="html">
  <div>
    <PlayerCard v-for="card in cards" v-bind:card="card"></PlayerCard>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import PlayerCard from '@/components/play/PlayerCard.vue';

export default {
  data(){
    return {
    }
  },
  props: ['cards'],
  components: {
    PlayerCard
  },
  methods: {
    handleCardPick() {
      eventBus.$emit('player-card-picked', {colour: 'blue', number: 3});
    }
  },
}
</script>

<style lang="css" scoped>
</style>
