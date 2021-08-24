const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const port = 3000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '../')));


app.use('/', (req, res) => {
  res.render('index.html')
})

app.get('/search', (req, res) => {
  axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${req}`)
    .then((response) => {
      res.send(response.items);
      console.log(response.items);
    })
    .catch(err => res.sendStatus(404));
})

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});