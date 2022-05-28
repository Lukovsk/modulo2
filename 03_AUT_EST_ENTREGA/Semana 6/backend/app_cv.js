const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 2332;

const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'cv.db';

const bodyParser = require('body-parser');
const { urlencoded } = require('express');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("../frontend/"));
app.use(express.json());

/* Definição dos endpoints */

/****** CRUD ******************************************************************/

// Retorna todos registros (é o R do CRUD - Read)
app.get('/users', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM Tilili ORDER BY title COLLATE NOCASE';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});