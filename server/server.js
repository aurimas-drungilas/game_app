const express = require('express');
const app = express();

const cors = require ('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('public'))

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect(
  'mongodb://localhost:27017',
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then((client) => {
  const db = client.db('game');
  const unoCollection = db.collection('Cards');
  const unoRouter = createRouter(unoCollection);
  app.use('/api/cards', unoRouter);
})
.catch(console.err);

app.listen(3000, function () {
  console.log('listening on port 3000');
});
