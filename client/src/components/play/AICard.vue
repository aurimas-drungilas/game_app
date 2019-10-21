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
  /* transition: all .5s ease-in-out; */
  box-shadow: 4px 4px 3px grey;
}

/* .ai-card:hover {
  box-shadow: 5px 5px 3px grey;
  transform: scale(2);
} */
</style>
