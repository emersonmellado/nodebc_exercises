const express = require('express')
const route = express.Router()

let products = [{
    id: 1,
    name: "Hoverboard"
},
{
    id: 2,
    name: "Lipstick"
},
{
    id: 3,
    name: "Ready player one"
}]

route.get('/', (req, res) => {
    res.json(products)
})

route.get('/:id', (req, res) => {
    const product = products.find(c => c.id == req.params.id)
    res.json(product);
})

route.post('/', (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json(products);
})

route.put('/:id', (req, res) => {
    const productIndex = products.findIndex(c => c.id == req.params.id)
    const product = req.body;
    products[productIndex] = product;
    res.json(products)
})

route.delete('/:id', (req,res)=>{
    const productIndex = products.findIndex(c => c.id == req.params.id)
    products.splice(productIndex, 1)
    res.json(products)
})

module.exports = route;