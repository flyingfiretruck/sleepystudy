const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '../')));


app.use('/', (req, res) => {
  res.render('index.html')
})

app.listen(process.env.port, () => {
  console.log(`Server listening at localhost:${process.env.port}!`);
});