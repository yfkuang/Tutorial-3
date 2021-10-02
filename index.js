/*
const sum = (num1, num2) => {

    return num1 + num2;
}

const result = sum(2, 3);
console.log(result);
*/

/*
const fs = require('fs');

const generateFile = () => {
    try {
        fs.writeFileSync('data.txt', "Hi, this file was made with Node");
    } catch (err) {
        console.log("Error: " + err);
    }
}

generateFile();
*/

/*
const http = require('http');

http.createServer(function (req, res){
    res.write('Server started. Hello!');
    res.end();
}).listen(8000);
*/


/*
const myModule = require('./my-module');

const date = myModule();

console.log(date);
*/


//require express
const express = require('express');

//init express app
const app = express();

//specify port to listen
const port = 9000;

// API / urls
app.get('/', (req, res) => {
    res.send("Express Hello");
});

app.get('/api/cats', (req, res) => {

    // call to db


    //return dummy data
    const cats = ["British Shorthair", "Ragdoll", "Maine Coon"];
    const dogs = ["Husky", "Labrador", "Corgi"];

    //Send in JSON
    res.send(JSON.stringify(cats));
});

app.get('/api/dogs', (req, res) => {

    // call to db


    //return dummy data
    const dogs = ["Husky", "Labrador", "Corgi"];

    //Send in JSON
    res.send(JSON.stringify(dogs));
});

//run express http server on specified port
app.listen(port, () => {
    console.log("Listening on port", port);
});