const express = require('express');
const app = express();
const port = 3000;

var mysql = require('mysql')
var connection = mysql.createConnection({
  host    : 'db',
  user     : 'root',
  password : '123',
  database : 'node_test'
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
});

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/users', (req, res) => {
    connection.query(`SELECT * from users`, function (err, rows, fields) {
        if (err) throw err
        
        res.send(rows)
    });
});
app.get('/users/:userId', (req, res) => {
    var userId = parseInt(req.params.userId);

    connection.query(`SELECT * from users where id = ${userId}`, function (err, rows, fields) {
        if (err) throw err
        
        res.send(rows[0])
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));