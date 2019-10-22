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
    }
  }
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
  box-shadow: 4px 4px 1px rgba(0, 0, 0, 0.6);
  margin: 5px;
  transition: all .3s ease-in-out;
  /* transform-origin: center; */
}

.player-card:hover {
  overflow: hidden;
  box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.4);
  transform: scale(1.1);
  margin-left: 5px;
  margin-right: 5px;
}

</style>
