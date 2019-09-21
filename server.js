const express = require('express')
const app = express()
const port = 9000

const handleRoute = function (req, res){
    res.send('Hello World');
};

app.get ('/', handleRoute);

app.post('/another-route', function (req, res) {
res.send(`Hello to another route!`};
})

app.put('/', function (req,res) { 
res.send(`this is a put route`);
})

app.delete('/', function (req, res){
    res.send(`this is a put route`);
})