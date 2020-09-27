const http = require('http');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, result) => {
    result.statusCode = 200
    result.setHeader('Content-Type', 'text/plain');
    result.end('Hello World !');
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`)
});