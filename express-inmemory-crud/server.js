const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

app.set('view engine', 'pug')
app.use(express.static('public'))

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const products = [{
    id: 1,
    name: "Cool Book",
    image: "https://donrheem.com/wp-content/uploads/2016/11/Book-Placeholder.png",
    description: "This is a cool book you won't regreat reading it"
},
{
    id: 2,
    name: "Awesome Book",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Placeholder_book.svg",
    description: "Yeat again this is a cool book you won't regreat reading it"
},
{
    id: 3,
    name: "Yet Book",
    image: "https://donrheem.com/wp-content/uploads/2016/11/Book-Placeholder.png",
    description: "Again yet again this is a cool book you won't regreat reading it"
}]

app.get('/', (req, res) => {
    res.render('index', { products: products })
})

app.get('/create', (req, res) => {
    res.render('create')
})

app.post('/create', urlencodedParser, (req, res) => {
    const body = req.body;
    products.push(body);
    res.redirect('/');
})

app.get('/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id)
    res.render('details', { product: product })
})

app.get('/delete/:id', (req, res) => {
    const productIndex = products.findIndex(p => p.id == req.params.id)
    products.splice(productIndex, 1);
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})