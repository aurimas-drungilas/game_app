<template lang="html">
  <div>
    <AIPlayer v-bind:cards="ai_player.cards"></AIPlayer>
    <Computer v-bind:draw_pile="draw_pile" v-bind:discard_pile="discard_pile"></Computer>
    <Player v-bind:cards="player.cards" ></Player>
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
      ai_player: {
        cards: ['ai1', 'ai2', 'ai3'],
      },
      draw_pile: [],
      discard_pile: [],
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
      this.assignAIPlayerCards(this.cards);
      this.assignDrawPileCards(this.cards);
      this.assignDiscardPileCards([this.cards[0]]);
    },
    update() { // Run after any action is performed.

    },
    assignPlayerCards(cards) {
      this.player.cards = cards;
    },
    assignAIPlayerCards(cards) {
      this.ai_player.cards = cards;
    },
    assignDrawPileCards(cards) {
      this.draw_pile = cards;
    },
    assignDiscardPileCards(cards) {
      this.discard_pile = cards;
    },
  },
  components: {
    AIPlayer, Computer, Player
  },
}
</script>

<style lang="css" scoped>
</style>
