var express = require('express');

var app = express();
var port = 3000

console.log("Se levanto");

var datitos = require('./datitos');

app.use('/prueba',datitos);

app.listen(port);