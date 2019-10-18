<template lang="html">
  <div>
    <h2>Test Your Gaelic numbers!</h2>
    <numbers-cloud/>
    <numbers-test/>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

import NumbersCloud from '@/components/quiz/NumbersCloud.vue'
import NumbersTest from '@/components/quiz/NumbersTest.vue'

export default {
  name: 'quiz',
  components: {
    'numbers-cloud': NumbersCloud,
    'numbers-test': NumbersTest
  }
}
</script>

<style lang="css" scoped>
</style>
