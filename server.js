// server
const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const fetch = require('node-fetch');

app.engine('handlebars', expbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { 

    })
});

//routing
app.get('/people', (req, res) => {
    
    // gets the data from the Star Wars API
   fetch('https://swapi.co/api/people/')
        .then(res => res.json())
        .then(
            (json) => { 
                // console.log(json);
                // express
                res.render('people', { 
                    luke: json.results[0].name,
                    heightLuke: json.results[0].height,
                    lukeWorld: json.results[0].homeworld.name,
                    leia: json.results[4].name,
                    heightLeia: json.results[4].height,
                    leiaWorld: json.results[4].homeworld.name,
                    vader: json.results[3].name,
                    heightVader: json.results[3].height,
                    vaderWorld: json.results[3].homeworld.name
                    
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



