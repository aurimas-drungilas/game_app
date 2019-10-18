<template lang="html">
  <div>
    <PlayerCards></PlayerCards>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import PlayerCards from '@/components/play/PlayerCards.vue';

export default {
  components: {
    PlayerCards
  }
}
</script>

<style lang="css" scoped>
</style>
