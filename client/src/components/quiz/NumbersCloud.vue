<template lang="html">
  <div>
    <p v-for="number in numbers" :numbers="numbers">{{number}}</p>
  </div>
</template>

<script>
export default {
  name: 'numbers-cloud',
  data() {
    return {
      numbers: ['neoni', 'aon', 'dhà', 'trì', 'ceithir', 'còig', 'sia', 'seachd', 'ochd', 'naoi']
    }
  },
  mounted() {
    this.doRandomisation(this.numbers);
  },
  methods: {
    doRandomisation(array) {
      for (element in array) {
        array.sort(() => Math.random() - 0.5);
        return array;
      }// data.shuffle();
    }
  }
}
</script>

<style lang="css" scoped>
p {
  display: inline-block;
  padding: 5px 20px;
}
div {
  max-width: 400px;
  margin: 0 auto;
}
</style>
