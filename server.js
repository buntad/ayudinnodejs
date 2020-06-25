var express = require('express');

var app = express();


console.log("Se levanto");

var datitos = require('./datitos');

app.use('/prueba',datitos);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);

