<template lang="html">
  <div>
    <AICard v-for="card in cards" v-bind:card="card" v-bind:key="card.id"></AICard>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import AICard from '@/components/play/AICard.vue';

export default {
  components: {
    AICard
  },
  props: ['cards'],
}
</script>

<style lang="css" scoped>
</style>
