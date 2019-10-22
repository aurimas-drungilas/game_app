<template lang="html">
  <div>
    {{this.item.question}} – <span v-on:mouseover="playSound">{{this.item.answers[0]}}</span>
  </div>
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
span:hover {
  cursor: pointer;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 15px;
  padding: 4px 19px;
}
</style>
