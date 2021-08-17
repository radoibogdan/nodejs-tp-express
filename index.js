const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.use(express.urlencoded({extended: true}));

app.get('/game/add', (req, res) => {
  const opperand1 = getRandomInt(1, 100);
  const opperand2 = getRandomInt(1, 100);
  res.render('addition', {opperand1, opperand2});
})

app.post('/result', (req, res) => {
  const answer = +req.body.answer;
  const opperand1 = +req.body.opperand1;
  const opperand2 = +req.body.opperand2;
  if (opperand1 + opperand2 == answer) {
    res.send('Success. Free NodeJs tutorial for you !!!');
  } else {
    res.send('You are going to hell (wherever that is...)!')
  }
})

// SET PORT
app.listen(3300, () => {
  console.log('[+] - Serveur HTTP écoutant le port 3300...');
})

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
