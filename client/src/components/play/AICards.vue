<template lang="html">
  <div>
    <AICard></AICard>
    <AICard></AICard>
    <AICard></AICard>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import AICard from '@/components/play/AICard.vue';

export default {
  components: {
    AICard
  }
}
</script>

<style lang="css" scoped>
</style>
