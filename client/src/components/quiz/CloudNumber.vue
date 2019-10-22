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
p {
  display: inline-block;
  padding: 5px 20px;
  border-radius: 15px;
}
p:hover {
  cursor: pointer;
  background-color: white;
  border: 1px solid lightgrey;
  padding: 4px 19px;
}
</style>
