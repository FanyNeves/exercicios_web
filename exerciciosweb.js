const express = require('express');
const app = express();


/*app.get(
    '/',
    (req,res) => {
        res.send('Testando o express!');
    });

app.get("/filmes/:id",
(req,res) => {
   res.send(req.params.id);
});*/


// Questão 1
/*app.get(
    '/',
(req,res) => {
    res.send("Bem-vindo ao sistema!")
});


// Questão 2

app.get(
    '/sobre',
    (req,res) => {
        res.send("Hello World!")
    });


//Questão 3

app.get(
    '/contato',
    (req,res) => {
        res.json({
  email: 'contato@email.com',
  telefone: '(81) 99999-9999'});
        });


// Questão 4

app.get(
    '/erro',
    (req,res) => {
        res.status(404).send("Página não encontrada")
    });


//Questão 5


app.get(
    '/inicio',
    (req,res) => {
        res.redirect('/sobre')
    });*/


app.listen(
    3000,
    () => console.log('Servidor em execução')
);


// Questão 6

/*app.get (
    '/usuario/:id',
    (req,res) => {
        res.send(req.params.id);
    });*/


// Questão 7

/*app.get(
    '/produtos/:nome',
    (req,res) => {
        res.send(req.params.nome)
    });*/

// Questão 8

/*app.get(
    '/filmes/:id/:nome',
    (req,res) => {

    const id = req.params.id;
    const nome = req.params.nome;

       res.send(`ID do filme: ${id} | Nome do filme: ${nome}`);
    });*/


// Questão 9

/*app.get(
    '/buscar',
    (req,res) => {
        res.send(req.query.nome)
    });*/

// para rodar: buscar?nome=fany


// Questão 10

   /* app.get(
        '/produtos', 
        (req, res) => {
 
  const categoria = req.query.categoria;
  const pagina = req.query.pagina;

  res.send(`Categoria buscada: ${categoria} <br> Página: ${pagina}`);
});*/

// Questão 11

/*app.get(
    '/usuarios',
    (req,res) => {
         const idade = req.query.idade;
         res.send(req.query.idade);
    });*/

    // para rodar: usuarios?idade=16

   // Questão 12

/*<h1> Bem-Vindo ao sistema!</h1>*/
   
// Questão 13

/*app.get('/', (req, res) => {
  res.render('home');
});

app.get(
    '/perfil',
    (req,res) => {
        res.render('perfil', {
            nome: 'Fany',
            idade: 16
        });
    });*/
