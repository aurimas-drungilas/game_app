<template lang="html">
  <div>
    <individual-number v-for="question in questions" :questionsData="question"/>
  </div>
</template>

<script>
import IndividualNumber from '@/components/quiz/IndividualNumber.vue'

export default {
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
        { question: 10, answers: ['deich'], soundbiteUrl: 'http://localhost:3000/sounds/10.mp3'},
      ]
    }
  },
  components: {
    'individual-number': IndividualNumber
  }
}
</script>

<style lang="css" scoped>
</style>
