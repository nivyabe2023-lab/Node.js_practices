const http = require('http');

const server = http.createServer((req, res) => {

    console.log("Request received");
    console.log("URL:", req.url);
    console.log("Method:", req.method);

    res.setHeader('Content-Type', 'text/plain');

    // Routing
    if (req.url === "/") {
        res.write("Welcome to Home Page");
        res.end();
    }

    else if (req.url === "/about") {
        res.write("Welcome to About Page");
        res.end();
    }

    else if (req.url === "/contact") {
        res.write("Welcome to Contact Page");
        res.end();
    }

    else {
        res.write("404 Page Not Found");
        res.end();
    }

});

server.listen(3000, 'localhost', () => {
    console.log("Server running at http://localhost:3000");
});