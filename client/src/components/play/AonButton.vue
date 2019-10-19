<template lang="html">
  <button type="button" v-on:click="handleClick">AON!</button>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  methods: {
    handleClick() {
      eventBus.$emit('aon-button-clicked', 'Aon!');
    },
  },
}
</script>

<style lang="css" scoped>
button:hover {
  cursor: pointer;
}
</style>
