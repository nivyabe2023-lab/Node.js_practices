const http = require('http');

const server = http.createServer((req, res) => {
    // Request
    console.log("Request Made");
    console.log(req.url);
    console.log(req.method);

    // Response
    res.setHeader('Content-Type', 'text/plain');
    res.write('Welcome to my page');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log("Server is listening on port 3000");
});