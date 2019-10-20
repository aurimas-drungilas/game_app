<template lang="html">
  <div>
    <span v-if="showAux && correct">V</span> <!-- TODO: add emojis if possible -->
    <span v-if="showAux && !correct">X</span>
    <span>{{this.data.question}}</span>
    <input type="text" v-model:change="input">
    <button type="button" v-on:click="handleCheckClick">Check</button>
    <!-- TODO: Read more on: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio -->
    <audio v-if="correct" controls>
      <source :src="this.data.soundbiteUrl" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      showAux: false,
      correct: false,
    }
  },
  props: ['data'],
  methods: {
    handleCheckClick() {
      if (this.data.answers.includes(this.input.toLowerCase())) {
        this.correct = true;
      } else {
        this.correct = false;
      }
      this.showAux = true;
    }
  },
}
</script>

<style lang="css" scoped>
audio {
  /* TODO: style this */
  height: 16px;
  vertical-align: center;
}
</style>
