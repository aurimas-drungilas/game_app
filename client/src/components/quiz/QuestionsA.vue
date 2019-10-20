<template lang="html">
  <div>
    <QuestionA v-for="question in questions" :data="question"></QuestionA>
  </div>
</template>

<script>
import QuestionA from '@/components/quiz/QuestionA.vue';

export default {
  components: {
    QuestionA
  },
  data() {
    return {
      questions: [
        { question: 1, answers: ['aon'], soundbiteUrl: ''},
        { question: 2, answers: ['dhà', 'dha'], soundbiteUrl: ''},
        { question: 3, answers: ['trì', 'tri'], soundbiteUrl: ''},
        { question: 4, answers: ['ceithir'], soundbiteUrl: ''},
        { question: 5, answers: ['còig', 'coig'], soundbiteUrl: ''},
        { question: 6, answers: ['sia'], soundbiteUrl: ''},
        { question: 7, answers: ['seachd'], soundbiteUrl: ''},
        { question: 8, answers: ['ochd'], soundbiteUrl: ''},
        { question: 9, answers: ['naoi'], soundbiteUrl: ''},
        { question: 10, answers: ['deich'], soundbiteUrl: ''},
      ]
    }
  },
  mounted() {
    this.randomiseOrder();
  },
  methods: {
    randomiseOrder(arr) {
      // TODO: randomise the list if needed
      return arr;
    }
  },
}
</script>

<style lang="css" scoped>
</style>
