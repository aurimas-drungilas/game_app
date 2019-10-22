<template lang="html">
  <div class="cloud">
    <CloudNumber v-for="banana in numbers" :item="banana"/>
  </div>
</template>

<script>
import CloudNumber from '@/components/quiz/CloudNumber.vue'

export default {
  data() {
    return {
      numbers: [
      {  word: 'aon', soundbiteUrl: 'http://localhost:3000/sounds/1.mp3'},
      {  word: 'dhà', soundbiteUrl: 'http://localhost:3000/sounds/2.mp3'},
      {  word: 'trì', soundbiteUrl: 'http://localhost:3000/sounds/3.mp3'},
      {  word: 'ceithir', soundbiteUrl: 'http://localhost:3000/sounds/4.mp3'},
      {  word: 'còig', soundbiteUrl: 'http://localhost:3000/sounds/5.mp3'},
      {  word: 'sia', soundbiteUrl: 'http://localhost:3000/sounds/6.mp3'},
      {  word: 'seachd', soundbiteUrl: 'http://localhost:3000/sounds/7.mp3'},
      {  word: 'ochd', soundbiteUrl: 'http://localhost:3000/sounds/8.mp3'},
      {  word: 'naoi', soundbiteUrl: 'http://localhost:3000/sounds/9.mp3'},
      {  word: 'deich', soundbiteUrl: 'http://localhost:3000/sounds/10.mp3'},]
    }
  },
  mounted() {
    this.doRandomisation(this.numbers);
  },
  methods: {
    doRandomisation(array) {
      array.sort(() => Math.random() - 0.5);
      return array;
    }
  },
  components: {
    CloudNumber
  }
}
</script>

<style lang="css" scoped>
.cloud {
  border: 2px solid lightgrey;
  background-color: ghostwhite;
  border-radius: 40px;
  max-width: 400px;
  margin: 0 auto;
}
</style>
