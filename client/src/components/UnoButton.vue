<template lang="html">
  <button type="button" v-on:click="handleClick">Uno</button>
</template>

<script>
import Game from '../models/Game.js'

export default {
  methods: {
    handleClick() {
      Game.start();
    }
  },
}
</script>

<style lang="css" scoped>
</style>
