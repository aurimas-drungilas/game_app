<template lang="html">
  <div>
    <DrawPile></DrawPile>
    <DiscardPile></DiscardPile>
    <AonButton></AonButton>
  </div>
</template>

<script>
import DrawPile from '@/components/play/DrawPile.vue';
import DiscardPile from '@/components/play/DiscardPile.vue';
import AonButton from '@/components/play/AonButton.vue';

export default {
  components: {
    DrawPile, DiscardPile, AonButton
  }
}
</script>

<style lang="css" scoped>
</style>
