<template lang="html">
  <div>
    <p>AI cards</p>
    <AICards v-bind:cards="cards"></AICards>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import AICards from '@/components/play/AICards.vue';

export default {
  components: {
    AICards
  },
  props: ['cards'],
}
</script>

<style lang="css" scoped>
</style>
