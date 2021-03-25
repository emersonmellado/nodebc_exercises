const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
    const superheroes = [
        { name: 'BATMAN', image: 'batman.jpg' },
        { name: 'SPIDER-MAN', image: 'spiderman.jpg' },
        { name: 'CAPTAIN MARVEL', image: 'captainmarvel.jpg' },
        { name: 'HULK', image: 'hulk.jpg' },
        { name: 'THOR', image: 'thor.jpg' },
        { name: 'IRON MAN', image: 'ironman.jpg' },
        { name: 'DAREDEVIL', image: 'daredevil.jpg' },
        { name: 'BLACK WIDOW', image: 'blackwidow.jpg' },
        { name: 'CAPTAIN AMERICA', image: 'captainamerica.jpg' },
        { name: 'WOLVERINE', image: 'wolverine.jpg' },
    ];

    res.render('index', { superheroes: superheroes });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});