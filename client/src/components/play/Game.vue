<template lang="html">
  <div>
    <AIPlayer v-bind:cards="ai.cards"></AIPlayer>
    <Computer></Computer>
    <Player v-bind:cards="player.cards"></Player>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import CardsService from '@/services/CardsService.js';
import AIPlayer from '@/components/play/AIPlayer.vue';
import Computer from '@/components/play/Computer.vue';
import Player from '@/components/play/Player.vue';
import Game from '@/helpers/Game.js'

export default {
  data() {
    return {
      plays: [],
      cards: [],
      cardsMisc: [],
      player: {
        cards: [],
      },
      ai: {
        cards: ['ai1', 'ai2', 'ai3'],
      },
    }
  },
  mounted() {
    // PlayService.getPlay().then(json => this.plays = json);
    // eventBus.$on('player-card-picked', data => console.log(data));
    // Get all the cards and init the game.
    CardsService.get().then(json => {
      this.cards = json;
      this.init();
    });
  },
  methods: {
    init() { // Run only once when the game starts.
      this.assignPlayerCards(this.cards);
    },
    update() { // Run after any action is performed.

    },
    assignPlayerCards(cards) {
      this.player.cards = cards;
    }
  },
  components: {
    AIPlayer, Computer, Player
  },
}
</script>

<style lang="css" scoped>
</style>
