const express = require('express')
const app = express()

app.get('/', function (req, res) { //root path
    res.send('<div style="text-align:center;"><h1>Hello Node.js Server in a h1!</h1><br/><img src="https://placekitten.com/96/139" /></div>');
})

app.get('/search/fake', function (req, res) {
    const characters = [
        {
            name: "John Rambo",
            age: 34
        },
        {
            name: "Ada Lovelace",
            age: 35
        }]
    res.send(JSON.stringify(characters));
});

app.get('/search/json', function (req, res) {
    const characters = [
        {
            name: "John Rambo",
            age: 34
        },
        {
            name: "Ada Lovelace",
            age: 35
        }]
    res.json(characters);
});

app.listen(3000, () => {
    console.log(`Server listening on port ${3000}`);
})