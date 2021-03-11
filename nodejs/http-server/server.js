const http = require('http');
const port = 3000;

// const requestHandler = (request, response) => {
//     response.end('<div style="text-align:center;"><h1>Hello Node.js Server in a h1!</h1><br/><img src="https://placekitten.com/96/139" /></div>');
// }

const requestHandlerJson = (request, response) => {
    const characters = [
        {
            name: "John Rambo",
            age: 34
        },
        {
            name: "Ada Lovelace",
            age: 35
        }]
    response.end(JSON.stringify(characters));
}

const server = http.createServer(requestHandlerJson);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})