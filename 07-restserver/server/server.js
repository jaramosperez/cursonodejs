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
mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
useCreateIndex: true }, (err, res) => {
    if(err) throw err;

    console.log("Conexión a la BD exitosa");
});

//LEVANTANDO EL SERVIDOR
app.listen(process.env.PORT, () => {
    console.log('Escuchando en puerto ', 3000);
});

// WJtkLLyOYA3iHRBm
//mongodb+srv://zodux:WJtkLLyOYA3iHRBm@cluster0.b4n91.mongodb.net/cafe