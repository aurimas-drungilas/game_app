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
import GameHelper from '@/helpers/Game.js';

export default {
  data() {
    return {
      setup: {
        startingCards: 2,
        updateTime: 300, // milliseconds
        aiThinkingTime: 1000, // milliseconds
        aonClickTime: 4000, // milliseconds
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
        aon: false,
        gameEnded: false,
        gameWinner: '',
      },
    }
  },
  mounted() {
    // Set up the event buses
    eventBus.$on('player-card-clicked', data => this.playerCardClickedEvent(data));
    eventBus.$on('ai-card-picked', data => console.log(data));
    eventBus.$on('draw-pile-clicked', data => this.drawPileClickedEvent(data));
    eventBus.$on('aon-button-clicked', data => this.aonButtonClickedEvent());

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

    update() {
      GameHelper.delay(this.getUpdateTime())
      .then(() => console.log('<--------'))
      // Handle Aon click
      .then(() => {
        // console.log('Handle Aon click');
        if (this.shouldAonBeTriggered()) {
          this.startAonExpectation();
          return GameHelper.delay(this.getAonClickTime()).then(() => {
            if (!this.isAonExpectationFulfilled()) {
              this.aonPenalise();
            }
            this.resetAonExpectation();
          });
        }
      })
      // Handle turns
      .then(() => {
        if (this.getTurn() === 'player') {
          this.updatePlayerGameState();
        } else if (this.getTurn() === 'ai') {
          return GameHelper.delay(this.getAIThinkingTime()).then(() => {
            this.updateAIGameState();
          });
        }
      })
      // Handle game end
      .then(() => {
        this.checkForGameEnd();
        if (this.getGameEnd() === true) {
          alert(`${this.getWinner()} has won the game!`);
        } else {
          this.update();
        }
      })
      .then(() => console.log('<--------'));
    },

    updatePlayerGameState() {
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
      }
    },

    updateAIGameState() {
      if (this.state.turn === 'ai') {
        console.log("ai turn");
        // Draw or pick?
        if (this.shouldDiscard(this.ai_player.cards)) {
          console.log("ai should discard");
          this.state.action = 'discard';
          this.aiCardPickedEvent(this.aiPickCard());
        } else {
          console.log("ai should draw");
          this.state.action = 'draw';
          this.aiDrawCard();
        }
      }
    },

    getTurn() {
      return this.state.turn;
    },

    getAction() {
      return this.state.action;
    },

    getGameEnd() {
      return this.state.gameEnded;
    },

    getUpdateTime() {
      return this.setup.updateTime;
    },

    getAIThinkingTime() {
      return this.setup.aiThinkingTime;
    },

    getAonClickTime() {
      return this.setup.aonClickTime;
    },

    getWinner() {
      return this.state.gameWinner;
    },

    shouldAonBeTriggered() {
      if (this.player.cards.length === 1 && this.state.aon === false) {
        console.log("aon triggered");
        return true;
      } else {
        return false;
      }
    },

    startAonExpectation() {
      this.state.action = 'expecting-aon';
      this.state.aon = false;
    },

    aonButtonClickedEvent() {
      this.state.action = 'aon-fulfilled';
      this.state.aon = true;
    },

    isAonExpectationFulfilled() {
      if (this.state.action === 'aon-fulfilled') {
        console.log('Aon expectation fulfilled');
        return true;
      }
      return false;
    },

    aonPenalise() {
      console.log("adding {two} cards from draw pile");
      // TODO: set up control of penalty cards.
      [...Array(2)].map(() => {
        if (this.discard_pile.length >= 1) {
          const card = this.draw_pile.pop()
          this.player.cards.push(card);
        }
      });
    },

    resetAonExpectation() {
      this.state.turn = 'ai';
      this.state.action = '';
    },

    checkForGameEnd() {
      // Check the win state
      if (this.player.cards.length <= 0) {
        this.state.gameEnded = true;
        this.state.gameWinner = 'player';
      } else if (this.ai_player.cards.length <= 0) {
        this.state.gameEnded = true;
        this.state.gameWinner = 'ai';
      } else if (this.draw_pile.length <= 0) {
        if (this.player.cards.length <= this.ai_player.cards.length) {
          this.state.gameEnded = true;
          this.state.gameWinner = 'player';
        } else {
          this.state.gameEnded = true;
          this.state.gameWinner = 'ai';
        }
      }
    },

    showWinMessage() {
      alert("You have won!");
    },

    showLoseMessage() {
      alert("You have lost :(");
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
      this.state.turn = 'player';
      this.state.action = '';
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
      // Split the cards
      const playerCards = cards.splice(0, this.setup.startingCards);
      const aiCards = cards.splice(0, this.setup.startingCards);
      const discardPile = cards.splice(0, 1);
      const drawPile = cards;

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
          if (this.shouldAonBeTriggered()) {
            this.state.turn = 'player';
          } else {
            this.state.turn = 'ai';
            this.state.action = '';
          }
        }
      }
    },

    aiCardPickedEvent(card) {
      if (this.state.turn === 'ai' && this.state.action === 'discard') {
        // Card matches the pile colour?
        if (this.canDiscard(card)) {
          // Add the clicked card to the discard pile.
          this.discard_pile.push(card);
          // Remove from the player's cards.
          this.ai_player.cards.splice(GameHelper.getCardIndexInCards(card, this.ai_player.cards), 1);
          // Update the state
          this.state.turn = 'player';
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
        // Update the state.
        this.state.turn = 'ai';
        this.state.action = '';
        this.state.aon = false;
      }
    },
  },
  components: {
    AIPlayer, Computer, Player
  },
}
</script>

<style lang="css" scoped>
</style>
