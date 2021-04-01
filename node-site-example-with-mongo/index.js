const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const port = 3000;
app.set('view engine', 'pug');
app.use(express.static('public'));

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1:27017/comics';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const superHeroSchema = new mongoose.Schema({
    name: String,
    image: String
});

const SuperHeroModel = mongoose.model('SuperHeroModel', superHeroSchema);

app.get('/', async (req, res) => {
    const documents = await SuperHeroModel.find().exec();
    res.render('index', { superheroes: documents });
});

app.get('/superheroes/:id', async (req, res) => {
    const selectedId = req.params.id;
    const document = await SuperHeroModel.findOne({ "_id": selectedId }).exec();
    res.render('superhero', { superhero: document });
});

app.get('/superheroes/delete/:id', async (req, res) => {
    const selectedId = req.params.id;
    await SuperHeroModel.deleteOne({ "_id": selectedId }).exec();
    res.redirect('/');
});

app.post('/superheroes/update', urlencodedParser, async (req, res) => {
    const updatedId = req.body.id;

    const filter = { "_id": updatedId };
    const update = { $set: { name: req.body.superhero.toUpperCase() } };

    await SuperHeroModel.updateOne(filter, update).exec();

    res.redirect('/');
});

app.post('/superheroes', urlencodedParser, async (req, res) => {
    const newHero = {
        name: req.body.superhero.toUpperCase(),
        image: req.body.superhero_image,
    }
    await SuperHeroModel.create(newHero);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});