<template lang="html">
  <individual-number/>
  <!-- <div>
    <h3>Type in the corresponding Gaelic word: </h3>
    <form>1 :
      <input type="text" name="1" size="6"/>
      <input type="submit" value="Check" @click="checkAnswer()"/>
      <output name="1">{{trueOrFalse()}}</output>
    </form>
    <individual-number/>
  <!-- </div> -->
</template>

<script>
import IndividualNumber from '@/components/quiz/IndividualNumber.vue'

export default {
  name: 'numbers-test',
  data(){
    return {
      questions: [
        { question: 1, answers: ['aon'], soundbiteUrl: '..../public/gaelic_numbers_soundbites/1.mp3'},
        { question: 2, answers: ['dhà', 'dha'], soundbiteUrl: '..../public/gaelic_numbers_soundbites/2.mp3'},
        { question: 3, answers: ['trì', 'tri'], soundbiteUrl: '..../public/gaelic_numbers_soundbites/3.mp3'},
        { question: 4, answers: ['ceithir'], soundbiteUrl: '..../public/gaelic_numbers_soundbites/4.mp3'},
        { question: 5, answers: ['còig', 'coig'], soundbiteUrl: '..../public/gaelic_numbers_soundbites/5.mp3'},
        { question: 6, answers: ['sia'], soundbiteUrl: '..../public/gaelic_numbers_soundbites/6.mp3'},
        { question: 7, answers: ['seachd'], soundbiteUrl: '..../public/gaelic_numbers_soundbites/7.mp3'},
        { question: 8, answers: ['ochd'], soundbiteUrl: '..../public/gaelic_numbers_soundbites/8.mp3'},
        { question: 9, answers: ['naoi'], soundbiteUrl: '..../public/gaelic_numbers_soundbites/9.mp3'},
        { question: 10, answers: ['deich'], soundbiteUrl: '..../public/gaelic_numbers_soundbites/10.ogg'},
      ]
    }
    // answerInput: "",
    // isCorrect: null

  },
  components: {
    'individual-number': IndividualNumber
  },
  methods: {
    trueOrFalse() {
      if (this.answerInput === this.gaelicNumbers.key) {
        this.isCorrect = true;
      } else {
        this.isCorrect = false;
      }
      return this.isCorrect;
    },
    checkAnswer() {
      if (this.answerInput === this.gaelicNumbers.key) {
        return this.trueOrFalse();
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
