export default {

  // Source: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  shuffleCards(cards) {
    var j, x, i;
    for (i = cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = cards[i];
        cards[i] = cards[j];
        cards[j] = x;
    }
    return cards;
  },

}
