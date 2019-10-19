<template lang="html">
  <div>
    <h3>Type in the corresponding Gaelic word: </h3>
    <p v-for="gaelicNumber of gaelicNumbers">{{gaelicNumber}}</p>
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
        0: 'neoni',
        1: 'aon',
        2: 'dhà',
        3: 'trì',
        4: 'ceithir',
        5: 'còig',
        6: 'sia',
        7: 'seachd',
        8: 'ochd',
        9: 'naoi'
      }
    }
  },
  components: {
    'individual-number': IndividualNumber
  }
}
</script>

<style lang="css" scoped>
</style>
