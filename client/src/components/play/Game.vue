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
import GameHelper from '@/helpers/Game.js'

export default {
  data() {
    return {
      setup: {
        startingCards: 6,
      },
      cards: [],
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
    // Set up the event buses
    eventBus.$on('player-card-clicked', data => this.playerCardClickedEvent(data));
    eventBus.$on('ai-card-picked', data => console.log(data));
    eventBus.$on('draw-pile-clicked', data => this.drawPileClickedEvent(data));
    eventBus.$on('aon-button-clicked', data => console.log(data));

    // Get all the cards and init the game.
    CardsService.get().then(json => {
      this.cards = json;
      this.init();
    });
  },
  methods: {
    init() { // Run only once when the game starts.
      // Shuffle the cards
      this.cards = GameHelper.shuffleCards(this.cards);
      // Allocate the cards
      this.allocateCards(this.cards);
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
    allocateCards(cards) {
      let playerCards = [];
      let aiCards = [];
      let drawPile = [];
      let discardPile = [];
      let length = cards.length;

      // Split the cards around
      playerCards = cards.splice(0, this.setup.startingCards);
      aiCards = cards.splice(0, this.setup.startingCards);
      discardPile = cards.splice(0, 1);
      drawPile = cards;

      // Assign appropriate cards to appropriate entities
      this.assignPlayerCards(playerCards);
      this.assignAIPlayerCards(aiCards);
      this.assignDrawPileCards(drawPile);
      this.assignDiscardPileCards(discardPile);
    },
    playerCardClickedEvent(card) {
      // Allowed action?
      // Card matches the pile colour?
      // Do the action.
      this.discard_pile.push(card);
      // Remove from the player's cards.
    },
    drawPileClickedEvent(card) {
      // Allowed action?
      // Do the action.
      this.player.cards.push(card);
      // Remove from the draw pile.
      // this.draw_pile.pop();
    },
  },
  components: {
    AIPlayer, Computer, Player
  },
}
</script>

<style lang="css" scoped>
</style>
