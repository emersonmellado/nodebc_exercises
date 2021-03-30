const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const port = 3000;
app.set('view engine', 'pug');
app.use(express.static('public'));

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, function (err, client) {
    console.log("Connected successfully to MONGO server");
});

app.get('/', (req, res) => {
    MongoClient.connect(url, function (err, client) {
        const db = client.db('comics');
        const collection = db.collection('superheroes');

        collection.find({}).toArray((error, documents) => {
            client.close();
            res.render('index', { superheroes: documents });
        });
    });
});

app.get('/superheroes', (req, res) => {
    MongoClient.connect(url, function (err, client) {
        const db = client.db('comics');
        const collection = db.collection('superheroes');

        collection.find({}).toArray((error, documents) => {
            client.close();
            res.render('superhero', { superheroes: documents });
        });
    });
});

app.get('/superheroes/:id', (req, res) => {
    const selectedId = req.params.id;
    MongoClient.connect(url, function (err, client) {
        const db = client.db('comics');
        const collection = db.collection('superheroes');

        collection.find({ "_id": ObjectID(selectedId) }).toArray((error, documents) => {
            console.log("documents", documents);
            client.close();
            res.render('superhero', { superhero: documents[0] });
        });
    });
});

app.get('/superheroes/delete/:id', (req, res) => {
    const selectedId = req.params.id;
    MongoClient.connect(url, function (err, client) {
        const db = client.db('comics');
        const collection = db.collection('superheroes');

        collection.deleteOne({ "_id": ObjectID(selectedId) });
        res.redirect('/');
    });
});

app.post('/superheroes/update', urlencodedParser, (req, res) => {
    MongoClient.connect(url, function (err, client) {
        const updatedId = req.body.id;
        const db = client.db('comics');
        const collection = db.collection('superheroes');

        const filter = { "_id": ObjectID(updatedId) };
        const update = { $set: { name: req.body.superhero.toUpperCase()} };

        collection.updateOne(filter, update);

        res.redirect('/');
    });
});

app.post('/superheroes', urlencodedParser, (req, res) => {

    MongoClient.connect(url, function (err, client) {
        const db = client.db('comics');
        const collection = db.collection('superheroes');

        collection.insertOne({
            name: req.body.superhero.toUpperCase(),
            image: req.body.superhero_image,
        });
        res.redirect('/');
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});