<template lang="html">
  <div>
    <AIPlayer></AIPlayer>
    <Computer></Computer>
    <Player></Player>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import AIPlayer from '@/components/play/AIPlayer.vue';
import Computer from '@/components/play/Computer.vue';
import Player from '@/components/play/Player.vue';
import Game from '@/helpers/Game.js'

export default {
  components: {
    AIPlayer, Computer, Player
  },
  data(){
    return {
      plays: [],
      player: {
        cards: [],
      },
      computer: {
        cards: [],
      }
    }
  },
  mounted() {
    // PlayService.getPlay().then(json => this.plays = json);
    eventBus.$on('player-card-picked', data => console.log(data));
    // data: {colour: red, number: 8}
  },
  methods: {
    init() {
      // Run only once when the game starts.
    },
    update() {
      // Run after any action is performed.
    },
    handleClick() {
      Game.start();
    }
  },

}
</script>

<style lang="css" scoped>
</style>
