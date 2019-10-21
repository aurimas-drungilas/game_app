<template lang="html">
  <div class="game-over">
  <section class="">
    <p>Player wins: {{stats.player_wins}}</p>
    <p>AI wins: {{stats.ai_wins}}</p>
    <p>Draws: {{stats.draws}}</p>
  </section>
</div>
</template>

<script>
import GameStats from '@/services/GameStatsService.js';

export default {
  data() {
    return {
      stats: {
        player_wins: 0,
        ai_wins: 0,
        draws: 0,
      }
    }
  },
  mounted() {
    GameStats.get().then((json) => this.stats = json[0]);
  },
}
</script>

<style lang="css" scoped>
.game-over {
  padding-top: 20px;
  font-size: 40px;
}
</style>
