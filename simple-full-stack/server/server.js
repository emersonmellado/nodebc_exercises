const express = require('express');
const app = express();
var bodyParser = require('body-parser')
var cors = require('cors')
const port = 4000;

app.use(bodyParser.json())
app.use(cors());

app.get('/characters', (req, res) => {
    console.log("req.body", req.body);
    console.log("req.headers", req.headers);
    const characters = [
        {
            name: "Ada Lovelace",
            image: "https://placekitten.com/200/138"
        },
        {
            name: "Peter Parker",
            image: "https://placekitten.com/200/139"
        }
    ];
    res.json(characters);
});

app.post('/', (req, res)=>{
    console.log("req.body", req.body);
    console.log("req.headers", req.headers);
    res.send('Hello from post');
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})