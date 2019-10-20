<template lang="html">
  <div>
    <h2>Test Your Gaelic numbers</h2>
    <numbers-cloud/>
    <numbers-test/>
    <QuestionsA></QuestionsA>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

import NumbersCloud from '@/components/quiz/NumbersCloud.vue'
import NumbersTest from '@/components/quiz/NumbersTest.vue'
import QuestionsA from '@/components/quiz/QuestionsA.vue'

export default {
  name: 'quiz',
  components: {
    'numbers-cloud': NumbersCloud,
    'numbers-test': NumbersTest,
    QuestionsA
  }
}
</script>

<style lang="css" scoped>
</style>
