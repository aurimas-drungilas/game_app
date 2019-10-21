<template lang="html">
  <div v-on:click="handleClick" class="player-cards">
    <!-- Player Card {{card}} -->
    <img class="player-card" :src="card.front_url">
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  props: ['card'],
  methods: {
    handleClick() {
      eventBus.$emit('player-card-clicked', this.card);
    },
  },
}
</script>

<style lang="css" scoped>
.player-cards {
  display: inline-block;
  flex-wrap: wrap;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: center;
}

.player-card {
  width: 90px;
  height: auto;
  cursor: pointer;
  box-shadow: 4px 4px 3px grey;
  margin: 5px;
  transition: all .3s ease-in-out;
  /* transform-origin: center; */
}

.player-card:hover {
  overflow: hidden;
  box-shadow: 0px 0px 0px grey;
  transform: scale(1.9);
  margin-left: 40px;
  margin-right: 40px;
}

</style>
