const express = require('express')
const route = express.Router();

route.get('/', (req, res) => {
    res.send('Hello from home.js')
})

module.exports = route;