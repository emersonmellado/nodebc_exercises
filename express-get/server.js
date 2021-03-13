const express = require('express')
const app = express()
const products = require('./products.json')

app.get('/', (req, res) => {
    res.send(`<h1>Imagine a very cool product here, you can do it!</h1>`)
})

app.get('/store', (req, res) => {
    console.log("Products", products);
    res.send("Hello from Store")
})

app.get('/store/:id', (req, res) => { //:id is also a Business Logic Rule
    const product = products.find(p => p.id == req.params.id);//This is a busines logic rule
    res.send(`This is the product: ${product.name}`)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

/*
1. Choose a folder on your computer (better under nodebc)
2. Create a server.js with the content on our Slack channel
3. npm init -y
4. npm i express nodemon
5. change package.json to be:
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "nodemon"
    }
6. npm start
7. Go to http://localhost:3000 and you should see the "Imagine a very cool..." message
*/