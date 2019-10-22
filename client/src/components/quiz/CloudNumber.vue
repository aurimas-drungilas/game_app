<template lang="html">
  <p v-on:mouseover="playSound">{{this.item.word}}</p>
</template>

<script>


export default {
  props: ['item'],
  methods: {
    playSound() {
      const audio = new Audio(this.item.soundbiteUrl);
      audio.play();
    }
  }
}
</script>

<style lang="css" scoped>

p:hover {
  cursor: pointer;
  background-color: white;
}
</style>
