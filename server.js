// server
const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const fetch = require('node-fetch');

app.engine('handlebars', expbs());
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    res.render('index', { 

    })
});

//routing
app.get('/people', (req, res) => {
    
    // gets the data from the Star Wars API
   fetch('https://swapi.co/api/people')
        .then(res => res.json())
        .then(
            (json) => { 
                console.log(json);
                // exprsss
                res.render('people', { 
                    people: json.results
                })
                ///express
            }
        );
            
});

app.get('/planets', (req, res) => {
    
    // gets the data from the Star Wars API
    fetch('https://swapi.co/api/planets')
        .then(res => res.json())
        .then(
            (json) =>{ 
                console.log(json)

                res.render('planets', { 
                    planets: json.results
                })
            }
        );
    
        
        
});


app.get('/starships', (req, res) => {
    fetch('https://swapi.co/api/starships')
    .then(res => res.json())
    .then(
        (json) => {
            console.log(json)
            res.render('starships', {
                starships: json.results
            })
        }
    );
});

app.get('/films', (req, res) => {

    // gets the data from the Star Wars API
    fetch('https://swapi.co/api/films')
        .then(res => res.json())
        .then(
            (json) => { 
                console.log(json)

                res.render('films', { 
                    films: json.results
                })
            }
        );        
});

app.get('/films', (req, res) => {

    // gets the data from the Star Wars API
    var starships = fetch('https://swapi.co/api/starships')
        .then(res => res.json())
        .then(
            (json) => { 
                console.log(json)

                res.render('starships', { 
                    starships: json.results
                })
            }
        );        
});

app.listen(8080, () => {
    console.log("sever is starting at port ", 8080);
});



