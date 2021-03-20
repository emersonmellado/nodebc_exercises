const express = require('express')
const app = express()
const port = 3000

// const myMiddleware = function (req, res, next) {
//     // We set a new property in the request object
//     console.log('1. This is a Middleware call');

//     // We call the next middleware
//     next();
// }
//app.use(myMiddleware)

function logStart(req, res, next){
    req.startTime = new Date();
    next();
}

function logEnd(req, res, next){
    console.log('>>>>> Request ENDED at', new Date());
    req.endTime = new Date();
    next();
}

app.use(logStart); //Run this BEFORE every request.

app.get('/route1', (req, res, next) => {
    console.log("This is route 1 request it started at", req.startTime);

    res.send('Hello 1')
    setTimeout(next, 2000);
})

app.get('/route2', (req, res, next) => {
    console.log("This is route 2 request it started at", req.startTime);
    res.send('Hello 2')
    setTimeout(next, 2000);
})

app.get('/route3', (req, res, next) => {
    console.log("This is route 3 request it started at", req.startTime);
    res.send('Hello 3')
    setTimeout(next, 2000);
})

app.use(logEnd); //Run this AFTER every request.

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})