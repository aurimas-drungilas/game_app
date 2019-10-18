<template lang="html">
  <div>
    <DrawPile v-bind:cards="draw_pile" v-if="draw_pile.length"></DrawPile>
    <DiscardPile v-bind:cards="discard_pile" v-if="discard_pile.length"></DiscardPile>
    <AonButton></AonButton>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import DrawPile from '@/components/play/DrawPile.vue';
import DiscardPile from '@/components/play/DiscardPile.vue';
import AonButton from '@/components/play/AonButton.vue';

export default {
  components: {
    DrawPile, DiscardPile, AonButton
  },
  props: ['draw_pile', 'discard_pile']
}
</script>

<style lang="css" scoped>
div * {
  display: inline-block;
}
</style>
