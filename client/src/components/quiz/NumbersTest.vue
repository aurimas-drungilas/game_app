<template lang="html">
  <div>
    <h3>Type in the corresponding Gaelic word: </h3>
    <form>1 :
      <input type="text" name="1" size="6">
      <input type="submit" value="Check" @click="checkAnswer()">
      <output name="1">{{trueOrFalse()}}</output>
    </form>
    <!-- <p v-for="gaelicNumber of gaelicNumbers">{{gaelicNumber}}</p> -->
    <individual-number/>
  </div>
</template>

<script>
import IndividualNumber from '@/components/quiz/IndividualNumber.vue'

export default {
  name: 'numbers-test',
  data(){
    return {
      gaelicNumbers: {
        1: 'aon',
        2: 'dhà',
        3: 'trì',
        4: 'ceithir',
        5: 'còig',
        6: 'sia',
        7: 'seachd',
        8: 'ochd',
        9: 'naoi',
        10: 'deich'
      },
      answerInput: "",
      isCorrect: null
    }
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
