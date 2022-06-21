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

app.use(express.static("03_AUT_EST_ENTREGA/Semana 6/frontend/"));

app.use(express.json());

// Caminho do banco de dados
const DBPATH = '03_AUT_EST_ENTREGA/Semana 8/backend/cv.db';

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
app.post('/userupdate', (req, res) => {
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
app.post('/userdelete', (req, res) => {
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


// Endpoints para tabela ACADEMICO

// Retorna todos registros (é o R do CRUD - Read)
app.get('/readAcademico', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM academico ORDER BY Lugar COLLATE NOCASE';
    db.all(sql, [], (err, rows) => {
        if (err) { // se houver algum erro, ele vai printar esse erro no prompt e em json
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

// Criar um registro (é o C do CRUD - Create)
app.post('/insertAcademico', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    var db = new sqlite3.Database(DBPATH); // Abrindo o banco
    var sql = "INSERT INTO academico (Curso, Lugar, Inicio, Fim, Amor, Status) VALUES ('" + req.body.Curso + "','" + req.body.Lugar + "','" + req.body.Inicio + "','" + req.body.Fim + "', '" + req.body.Amor + "', '" + req.body.Status + "')";
    db.run(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

// Atualizar um registro (é o U do CRUD - Update)
app.post('/updateAcademico', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    var db = new sqlite3.Database(DBPATH); // Abrindo o banco
    var sql = "UPDATE academico SET Status ='" + req.body.Status + "'";
    db.run(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

// Deletar um registro (é o D do CRUD - Delete)
app.post('/deleteAcademico', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro do CORS

    var db = new sqlite3.Database(DBPATH); // Abrindo o banco
    var sql = "DELETE FROM academico WHERE id = '" + req.body.Curso + "'";
    db.run(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
})



app.listen(process.env.PORT, () => {
    console.log(`Server running`);
});