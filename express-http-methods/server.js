const express = require('express')
const app = express();
const port = 3000;

var bodyParser = require('body-parser')

app.use(bodyParser.json())

let products = [
    {
        id: 1,
        name: "Some awesome book"
    },
    {
        id: 2,
        name: "Another book"
    }
]

app.get('/', (req, res) => {
    res.json(products);
})

app.get('/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.send('<h1>Uh-oh: Product not found.</h1>')
    }
})

app.post('/', (req, res) => {
    const body = req.body;
    products.push(body);
    res.json(body)
})

app.delete('/:id', (req, res) => {
    const productIndex = products.findIndex(p => p.id == req.params.id)
    products.splice(productIndex, 1);
    res.json(products)
})

app.put('/:id', (req, res) => {
    const body = req.body;
    const productIndex = products.findIndex(p => p.id == req.params.id)
    products[productIndex] = body
    res.json(products)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})