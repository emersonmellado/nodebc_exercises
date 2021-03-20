const express = require('express')
const route = express.Router()

let categories = [{
    id: 1,
    name: "Electronics"
},
{
    id: 2,
    name: "Beauty"
}]

route.get('/', (req, res) => {
    res.json(categories)
})

route.get('/:id', (req, res) => {
    const category = categories.find(c => c.id == req.params.id)
    res.json(category);
})

route.post('/', (req, res) => {
    const category = req.body;
    categories.push(category);
    res.json(categories);
})

route.put('/:id', (req, res) => {
    const categoryIndex = categories.findIndex(c => c.id == req.params.id)
    const category = req.body;
    categories[categoryIndex] = category;
    res.json(categories)
})

route.delete('/:id', (req, res) => {
    const categoryIndex = categories.findIndex(c => c.id == req.params.id)
    if (categoryIndex === 1) {
        throw {code: 400, message:"This category index is invalid"}
    }
    categories.splice(categoryIndex, 1)
    res.json(categories)
})

module.exports = route;