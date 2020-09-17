const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers') 

app.use( express.static(__dirname + '/public'))

// EXPRESS HBS ENGINE
hbs.registerPartials(__dirname + '/views/parciales' );

app.set('view engine', 'hbs');


app.get('/', (req, res) => {
res.render('home.hbs', {
  nombre: 'Javier'
});
})

app.get('/about', (req, res) => {
  res.render('about.hbs')})

app.listen(3000, () => {
    console.log('Listen in port 3000');
})