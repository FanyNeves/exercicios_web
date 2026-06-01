const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs.engine({defaultLayout:false}));
app.set('view engine', 'handlebars');


/*app.get('/', (req, res) => {
  res.render('home');
});


app.get('/perfil', (req, res) => {
    res.render('perfil', {
        nome: 'Fany',
        idade: 16
    });
});*/


  /*app.get(
        '/filmes',
       (req,res) => {
        const listadeFilmes = ['Matrix', 'Interstelar', 'Vingadores', 'Avatar'];
    
       res.render('filmes', {
        filmes: listadeFilmes
       });
    });*/

    /*app.get('/status', (req, res) => {
  res.render('status', {
    nome: 'Fany',
    isVip: true,        // Mude para false para testar o 'else'
    contaBloqueada: false // Mude para true para testar o 'unless'
  });
});*/


app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
