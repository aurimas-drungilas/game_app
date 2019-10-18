<template lang="html">
  <div>
    <PlayerCard></PlayerCard>
    <PlayerCard></PlayerCard>
    <PlayerCard></PlayerCard>
  </div>
</template>

<script>
import PlayerCard from '@/components/play/PlayerCard.vue';

export default {
  data(){
    return {
      cards: [
        {colour: 'green', number: 5},
        {colour: 'green', number: 5},
        {colour: 'green', number: 5},
        {colour: 'green', number: 5}
      ]
    }
  },
  components: {
    PlayerCard
  },
  methods: {
    handleCardPick() {
      eventBus.$emit('player-card-picked', {colour: 'blue', number: 3});
    }
  }
}
</script>

<style lang="css" scoped>
</style>
