// server
const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const fetch = require('node-fetch');

app.engine('handlebars', expbs());
app.set('view engine', 'handlebars');

//routing
app.get('/', (req, res) => {
    res.render('index', { layout: false })
});

app.get('/about', (req, res) => {
    res.render('about', { layout: false })
});

app.listen(8080, () => {
    console.log("sever is starting at port ", 8080);
});




// gets the data from the Star Wars API
var data = fetch('https://swapi.co/api/')
    .then(res => res.json())
    .then(json => console.log(json));

    console.log(data);
    
