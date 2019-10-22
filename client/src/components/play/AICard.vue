<template lang="html">
  <div>
    <img class="ai-card" :src="card.back_url">
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  props: ['card'],
}
</script>

<style lang="css" scoped>
div {
  display: inline-block;
}
.ai-card {
  width: 90px;
  height: auto;
  margin: 5px;
  box-shadow: 4px 4px 1px rgba(0, 0, 0, 0.6);
}
</style>
