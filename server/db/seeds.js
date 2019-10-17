use game;
db.dropDatabase();

db.play.insertMany([
  {
    name: "Test",
    bool: true
  },
  {
    name: "Test 2",
    bool: false
  },
  {
    name: "Test 3",
    bool: true
  }
]);
