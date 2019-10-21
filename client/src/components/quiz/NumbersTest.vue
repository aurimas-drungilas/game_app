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
        { question: 1, answers: ['aon'], soundbiteUrl: 'http://localhost:3000/sounds/1.mp3'},
        { question: 2, answers: ['dhà', 'dha'], soundbiteUrl: 'http://localhost:3000/sounds/2.mp3'},
        { question: 3, answers: ['trì', 'tri'], soundbiteUrl: 'http://localhost:3000/sounds/3.mp3'},
        { question: 4, answers: ['ceithir'], soundbiteUrl: 'http://localhost:3000/sounds/4.mp3'},
        { question: 5, answers: ['còig', 'coig'], soundbiteUrl: 'http://localhost:3000/sounds/5.mp3'},
        { question: 6, answers: ['sia'], soundbiteUrl: 'http://localhost:3000/sounds/6.mp3'},
        { question: 7, answers: ['seachd'], soundbiteUrl: 'http://localhost:3000/sounds/7.mp3'},
        { question: 8, answers: ['ochd'], soundbiteUrl: 'http://localhost:3000/sounds/8.mp3'},
        { question: 9, answers: ['naoi'], soundbiteUrl: 'http://localhost:3000/sounds/9.mp3'},
        { question: 10, answers: ['deich'], soundbiteUrl: 'http://localhost:3000/sounds/10.ogg'},
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
