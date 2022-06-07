
const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3022;
app.use(express.static("frontend/"));

const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'curriculo.db'; 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

/* Definição dos endpoints do sistema*/

// CRUD - BANCO DE DADOS CURRICULO

// Visualizar os usuários existentes na tabela

app.get('/usersvisualizar', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM Eventos ORDER BY IDeventos COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});


// Insere um registro (é o C do CRUD - Create)
app.post('/userinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); 

  sql = "INSERT INTO Eventos (Tipo, Nome, Local, Ano, Duracao) VALUES ('" + req.body.Tipo + "','" + req.body.Nome + "','" + req.body.Local + "','" + req.body.Ano + "','" + req.body.Duracao + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});



// Atualiza um registro (é o U do CRUD - Update)
app.post('/userupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); 

  sql = "UPDATE Eventos SET Duracao = '" + req.body.Duracao + "' WHERE IDeventos = '" + req.body.IDeventos + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});



// Exclui um registro (é o D do CRUD - Delete)
app.post('/userdelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  sql = "DELETE FROM Eventos WHERE IDeventos = '" + req.body.IDeventos + "'";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});