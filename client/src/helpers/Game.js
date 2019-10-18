let persistent = 0;

export default {

  start() {
    persistent += 1;
    console.log("starting the game" + persistent);
  },

  checkWinCondition() {
    persistent += 1;
    console.log("checking win condition" + persistent);
  }

}
