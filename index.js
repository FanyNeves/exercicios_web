const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// Configura o Handlebars como view engine
app.engine('handlebars', exphbs.engine({defaultLayout:false}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home', {
    titulo: 'Mini Netflix',
    descricao: 'Os melhores filmes em um só lugar.'
  });
});

app.listen(3000, () => {
  console.log('Servidor em http://localhost:3000');
});