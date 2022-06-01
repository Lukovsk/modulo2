// Código do Servidor

// importa bibliote cas necessárias
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

// cira servidor no endereço local e determina que a pasta frontend deve ser usada com source
const app = express();
const hostname = '127.0.0.1';
const port = 2332;
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("../frontend/"));

app.use(express.json());

// Caminho do banco de dados
const DBPATH = 'cv.db';

const { urlencoded } = require('express');


/* Definição dos endpoints */

/****** CRUD ******************************************************************/

// Retorna todos registros (é o R do CRUD - Read)
app.get('/users', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM Tilili ORDER BY title COLLATE NOCASE';
    db.all(sql, [], (err, rows) => {
        if (err) { // se houver algum erro, ele vai printar esse erro no prompt e em json
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

// Criar um registro (é o C do CRUD - Create)
app.post('/userinsert', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    var db = new sqlite3.Database(DBPATH); // Abrindo o banco
    var sql = "INSERT INTO Tilili (title, id, love, time) VALUES ('" + req.body.title + "','" + req.body.id + "','" + req.body.love + "','" + req.body.time + "')";
    db.run(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

// Atualizar um registro (é o U do CRUD - Update)
// Criar um registro (é o C do CRUD - Create)
app.post('/userinsert', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    var db = new sqlite3.Database(DBPATH); // Abrindo o banco
    var sql = "UPDATE Tilili SET title = '" + req.body.title + "', love = '" + req.body.love + "', time= '" + req.body.time + "' WHERE id = '" + req.body.id + "'";
    db.run(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

// Deletar um registro (é o D do CRUD - Delete)
app.post('userdelete', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro do CORS

    var db = new sqlite3.Database(DBPATH); // Abrindo o banco
    var sql = "DELETE FROM Tilili WHERE id = '" + req.body.id + "'";
    db.run(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});