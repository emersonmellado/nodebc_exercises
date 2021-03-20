const express = require('express')
const bodyParser = require('body-parser')

const homeRoutes = require('./routes/home')
const productRoutes = require('./routes/products')
const categoryRoutes = require('./routes/categories')

const port = 3000
const app = express()
app.use(bodyParser.json())

app.use('/', homeRoutes);
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

app.use(function (err, req, res, next) {
    console.log("Console:", err)
    res.status(err.code).send(err.message)
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})