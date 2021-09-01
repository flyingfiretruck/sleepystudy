const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
require('dotenv').config();
const key = process.env.GOOGLE_KEY;
const port = 3000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '../')));


app.use('/', (req, res) => {
  res.render('index.html')
})

app.get('/video/:term', (req, res) => {
  axios.get(`https://www.googleapis.com/youtube/v3/search?key=${key}&q=asdf`)
    .then((response) => {
      res.json(response.items);
    })
    .catch(err => res.sendStatus(404));
})

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});