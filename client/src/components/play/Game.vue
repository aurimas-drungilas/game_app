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
        cards: [],
      },
      draw_pile: [],
      discard_pile: [],
      state: {
        turn: 'player', // player, ai
        action: '', // discard, draw
      },
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
      // First update
      this.update();
    },

    update() { // Run after any action is performed.
      // Update the game state.
      if (this.state.turn === 'player') {
        // Draw card or use one?
        console.log("player turn");
        // Draw or pick?
        if (this.shouldDiscard(this.player.cards)) {
          console.log("player should discard");
          this.state.action = 'discard';
        } else {
          console.log("player should draw");
          this.state.action = 'draw';
        }
      } else if (this.state.turn === 'ai') {
        console.log("ai turn");
        // Draw or pick?
        if (this.shouldDiscard(this.ai_player.cards)) {
          console.log("ai should discard");
          this.state.action = 'discard';
          this.playerCardClickedEvent(this.aiPickCard());
        } else {
          console.log("ai should draw");
          this.state.action = 'draw';
          this.aiDrawCard();
          this.update();
        }
      }
      // TODO: Check the win state 
    },

    aiPickCard() {
      const discardCard = this.discard_pile[this.discard_pile.length - 1];
      const result = this.ai_player.cards.findIndex(card => {
        return card.colour === discardCard.colour || card.number === discardCard.number;
      });
      return this.ai_player.cards[result];
    },

    aiDrawCard() {
      const drawCard = this.draw_pile.pop();
      this.ai_player.cards.push(drawCard);
    },

    shouldDiscard(yourCards) {
      const discardCard = this.discard_pile[this.discard_pile.length - 1];
      const result = yourCards.findIndex(card => {
        return card.colour === discardCard.colour || card.number === discardCard.number;
      });
      return result != -1 ? true : false;
    },

    canDiscard(yourCard) {
      const discardCard = this.discard_pile[this.discard_pile.length - 1];
      return yourCard.colour === discardCard.colour || yourCard.number === discardCard.number;
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
      if (this.state.turn === 'player' && this.state.action === 'discard') {
        // Card matches the pile colour?
        if (this.canDiscard(card)) {
          // Add the clicked card to the discard pile.
          this.discard_pile.push(card);
          // Remove from the player's cards.
          this.player.cards.splice(GameHelper.getCardIndexInCards(card, this.player.cards), 1);
          // Update the state
          this.state.turn = 'ai';
          this.update();
        }
      } else if (this.state.turn === 'ai' && this.state.action === 'discard') {
        // Card matches the pile colour?
        if (this.canDiscard(card)) {
          // Add the clicked card to the discard pile.
          this.discard_pile.push(card);
          // Remove from the player's cards.
          this.ai_player.cards.splice(GameHelper.getCardIndexInCards(card, this.ai_player.cards), 1);
          // Update the state
          this.state.turn = 'player';
          this.update();
        }
      }
    },

    drawPileClickedEvent(card) {
      // Allowed action?
      if (this.state.turn === 'player' && this.state.action === 'draw') {
        // Do the action.
        this.player.cards.push(card);
        // Remove from the draw pile.
        this.draw_pile.pop();
        this.update();
      }
      // else if (this.state.turn === 'ai' && this.state.action === 'draw') {
      //   this.ai_player.cards.push(card);
      //   this.draw_pile.pop();
      //   this.update();
      // }
    },
  },
  components: {
    AIPlayer, Computer, Player
  },
}
</script>

<style lang="css" scoped>
</style>
