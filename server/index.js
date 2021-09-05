const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
require('dotenv').config();
const port = 3000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '../')));

app.get('/video/:search', (req, res) => {
  axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=searchSortUnspecified&key=${process.env.GOOGLE_KEY}&q=${req.params.search}`)
    .then((response) => {
      res.json(response.data.items)
    })
    .catch(err => {
      console.log(err);
    });
})

app.use('/', (req, res) => {
  res.render('index.html')
})

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});