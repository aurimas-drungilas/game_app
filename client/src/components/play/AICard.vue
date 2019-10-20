<template lang="html">
  <div>
    <img :src="card.back_url">
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
img {
  width: 100px;
}
</style>
