<template lang="html">
  <div>
    <span v-if="showAuxiliary && isCorrect">✅</span>
    <span v-if="showAuxiliary && !isCorrect">❌</span>
    <span>{{this.questionsData.question}}</span>
    <input type="text" size="10" v-model:change="input" v-on:keyup.enter="handleCheckClick">
    <button type="button" v-on:click="handleCheckClick">Check</button>
    <audio v-if="isCorrect" autoplay>
      <source :src="this.questionsData.soundbiteUrl" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      showAuxiliary: false,
      isCorrect: false
    }
  },
  props: ['questionsData'],
  methods: {
    correctInputSound() {
      const correctInputAudio = new Audio(this.questionsData.soundbiteUrl);
      correctInputAudio.play();
    },
    wrongInputSound() {
      const wrongInputAudio = new Audio('http://localhost:3000/sounds/fail.mp3');
      wrongInputAudio.play();
    },
    handleCheckClick() {
      if (this.questionsData.answers.includes(this.input.toLowerCase())) {
        this.isCorrect = true;
        this.correctInputSound();
      } else {
        this.isCorrect = false;
        this.wrongInputSound();
      }
      this.showAuxiliary = true;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
