const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.set('view engine', 'pug'); //Sets pug "template engine"

app.get('/', (req, res) => {
    res.render('index', {
        title: 'This is the title of the page',
        message: 'This is a cool message'
    });
})

app.get('/about', (req, res) => {
    res.render('about', { title: "About page", message: "It can be anything from here" });
})

app.get('/products', (req, res) => {
    const allProducts = [{
        id: 1,
        name: "Cool Book"
    },
    {
        id: 2,
        name: "Roomba"
    }];
    res.render('products', {
        products: allProducts
    });
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})