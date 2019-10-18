<template lang="html">
  <div>
    <!-- <AICards>
      <BlankCard></BlankCard>
    </AICards>
    <GameCards>
      <DrawPileCards></DrawPileCards>
      <DiscardPileCards></DiscardPileCards>
    </GameCards>
    <PlayerCards>
      <Card></Card>
    </PlayerCards> -->
    <UnoButton></UnoButton>
    <p v-for="play in plays">{{play.name}}</p>
    <button type="button" v-on:click="handleClick">Play</button>
  </div>
</template>

<script>
// '@' allows to use root path of the 'src' folder.
import PlayService from '@/services/PlayService.js'
import UnoButton from '@/components/game/UnoButton.vue'
import Game from '@/helpers/Game.js'

export default {
  components: {
    UnoButton
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
    PlayService.getPlay().then(json => this.plays = json);
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
