<template lang="html">
  <div>
    <CloudNumber v-for="banana in numbers" :item="banana"/>
  </div>
</template>

<script>
import CloudNumber from '@/components/quiz/CloudNumber.vue'
import QuizCloudService from '@/services/QuizCloudService.js'

export default {
  data() {
    return {
      numbers: []
    }
  },
  mounted() {
    QuizCloudService.get()
    .then ((json) => {
      this.numbers = json;
      this.doRandomisation(this.numbers);
    })
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
div {
  max-width: 400px;
  margin: 0 auto;
}
</style>
