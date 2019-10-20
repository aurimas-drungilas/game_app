<template lang="html">
  <div>
    <p v-for="number in numbers">{{number}}</p>
  </div>
</template>

<script>
export default {
  name: 'numbers-cloud',
  data() {
    return {
      numbers: ['aon', 'dhà', 'trì', 'ceithir', 'còig', 'sia', 'seachd', 'ochd', 'naoi', 'deich']
    }
  },
  mounted() {
    this.doRandomisation(this.numbers);
  },
  methods: {
    doRandomisation(array) {
      for (this.element in array) {
        array.sort(() => Math.random() - 0.5);
        return array;
      }
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
