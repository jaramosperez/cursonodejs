require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario'));

// CONEXIÓN A MONGODB
mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
useCreateIndex: true }, () => {
    console.log("Conexión a la BD exitosa");
});

//LEVANTANDO EL SERVIDOR
app.listen(process.env.PORT, () => {
    console.log('Escuchando en puerto ', 3000);
});