use game;
db.dropDatabase();

db.createUser(
  {
    user: 'root',
    pwd: 'password',
    roles: [ { role: 'readWrite', db: 'game' } ]
  }
);

db.Cards.insertMany([
  {
    id: 10,
    colour: 'blue',
    number: 0,
    front_url: 'http://localhost:3000/images/blue10.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 11,
    colour: 'blue',
    number: 1,
    front_url: 'http://localhost:3000/images/blue1.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 12,
    colour: 'blue',
    number: 2,
    front_url: 'http://localhost:3000/images/blue2.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 13,
    colour: 'blue',
    number: 3,
    front_url: 'http://localhost:3000/images/blue3.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 14,
    colour: 'blue',
    number: 4,
    front_url: 'http://localhost:3000/images/blue4.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 15,
    colour: 'blue',
    number: 5,
    front_url: 'http://localhost:3000/images/blue5.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 16,
    colour: 'blue',
    number: 6,
    front_url: 'http://localhost:3000/images/blue6.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 17,
    colour: 'blue',
    number: 7,
    front_url: 'http://localhost:3000/images/blue7.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 18,
    colour: 'blue',
    number: 8,
    front_url: 'http://localhost:3000/images/blue8.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 19,
    colour: 'blue',
    number: 9,
    front_url: 'http://localhost:3000/images/blue9.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 20,
    colour: 'red',
    number: 0,
    front_url: 'http://localhost:3000/images/red10.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 21,
    colour: 'red',
    number: 1,
    front_url: 'http://localhost:3000/images/red1.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 22,
    colour: 'red',
    number: 2,
    front_url: 'http://localhost:3000/images/red2.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 23,
    colour: 'red',
    number: 3,
    front_url: 'http://localhost:3000/images/red3.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 24,
    colour: 'red',
    number: 4,
    front_url: 'http://localhost:3000/images/red4.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 25,
    colour: 'red',
    number: 5,
    front_url: 'http://localhost:3000/images/red5.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 26,
    colour: 'red',
    number: 6,
    front_url: 'http://localhost:3000/images/red6.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 27,
    colour: 'red',
    number: 7,
    front_url: 'http://localhost:3000/images/red7.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 28,
    colour: 'red',
    number: 8,
    front_url: 'http://localhost:3000/images/red8.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 29,
    colour: 'red',
    number: 9,
    front_url: 'http://localhost:3000/images/red9.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 30,
    colour: 'green',
    number: 0,
    front_url: 'http://localhost:3000/images/green10.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 31,
    colour: 'green',
    number: 1,
    front_url: 'http://localhost:3000/images/green1.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 32,
    colour: 'green',
    number: 2,
    front_url: 'http://localhost:3000/images/green2.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 33,
    colour: 'green',
    number: 3,
    front_url: 'http://localhost:3000/images/green3.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 34,
    colour: 'green',
    number: 4,
    front_url: 'http://localhost:3000/images/green4.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 35,
    colour: 'green',
    number: 5,
    front_url: 'http://localhost:3000/images/green5.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 36,
    colour: 'green',
    number: 6,
    front_url: 'http://localhost:3000/images/green6.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 37,
    colour: 'green',
    number: 7,
    front_url: 'http://localhost:3000/images/green7.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 38,
    colour: 'green',
    number: 8,
    front_url: 'http://localhost:3000/images/green8.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 39,
    colour: 'green',
    number: 9,
    front_url: 'http://localhost:3000/images/green9.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 40,
    colour: 'yellow',
    number: 0,
    front_url: 'http://localhost:3000/images/yellow10.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 41,
    colour: 'yellow',
    number: 1,
    front_url: 'http://localhost:3000/images/yellow1.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 42,
    colour: 'yellow',
    number: 2,
    front_url: 'http://localhost:3000/images/yellow2.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 43,
    colour: 'yellow',
    number: 3,
    front_url: 'http://localhost:3000/images/yellow3.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 44,
    colour: 'yellow',
    number: 4,
    front_url: 'http://localhost:3000/images/yellow4.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 45,
    colour: 'yellow',
    number: 5,
    front_url: 'http://localhost:3000/images/yellow5.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 46,
    colour: 'yellow',
    number: 6,
    front_url: 'http://localhost:3000/images/yellow6.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 47,
    colour: 'yellow',
    number: 7,
    front_url: 'http://localhost:3000/images/yellow7.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 48,
    colour: 'yellow',
    number: 8,
    front_url: 'http://localhost:3000/images/yellow8.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
  {
    id: 49,
    colour: 'yellow',
    number: 9,
    front_url: 'http://localhost:3000/images/yellow9.png',
    back_url: 'http://localhost:3000/images/back.png',
  },
]);

db.GameStats.insertMany([
  {
    player_wins: 0,
    ai_wins: 0,
    draws: 0,
  }
]);


db.QuizCloud.insertMany([
  {  word: 'aon', soundbiteUrl: 'http://localhost:3000/sounds/1.mp3'},
  {  word: 'dhà', soundbiteUrl: 'http://localhost:3000/sounds/2.mp3'},
  {  word: 'trì', soundbiteUrl: 'http://localhost:3000/sounds/3.mp3'},
  {  word: 'ceithir', soundbiteUrl: 'http://localhost:3000/sounds/4.mp3'},
  {  word: 'còig', soundbiteUrl: 'http://localhost:3000/sounds/5.mp3'},
  {  word: 'sia', soundbiteUrl: 'http://localhost:3000/sounds/6.mp3'},
  {  word: 'seachd', soundbiteUrl: 'http://localhost:3000/sounds/7.mp3'},
  {  word: 'ochd', soundbiteUrl: 'http://localhost:3000/sounds/8.mp3'},
  {  word: 'naoi', soundbiteUrl: 'http://localhost:3000/sounds/9.mp3'},
  {  word: 'deich', soundbiteUrl: 'http://localhost:3000/sounds/10.mp3'}
]);

db.QuizQuestions.insertMany([
  { question: 1, answers: ['aon'], soundbiteUrl: 'http://localhost:3000/sounds/1.mp3'},
  { question: 2, answers: ['dhà', 'dha'], soundbiteUrl: 'http://localhost:3000/sounds/2.mp3'},
  { question: 3, answers: ['trì', 'tri'], soundbiteUrl: 'http://localhost:3000/sounds/3.mp3'},
  { question: 4, answers: ['ceithir'], soundbiteUrl: 'http://localhost:3000/sounds/4.mp3'},
  { question: 5, answers: ['còig', 'coig'], soundbiteUrl: 'http://localhost:3000/sounds/5.mp3'},
  { question: 6, answers: ['sia'], soundbiteUrl: 'http://localhost:3000/sounds/6.mp3'},
  { question: 7, answers: ['seachd'], soundbiteUrl: 'http://localhost:3000/sounds/7.mp3'},
  { question: 8, answers: ['ochd'], soundbiteUrl: 'http://localhost:3000/sounds/8.mp3'},
  { question: 9, answers: ['naoi'], soundbiteUrl: 'http://localhost:3000/sounds/9.mp3'},
  { question: 10, answers: ['deich'], soundbiteUrl: 'http://localhost:3000/sounds/10.mp3'}
]);