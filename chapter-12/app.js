const http = require("node:http");

const server = http.createServer((req, res)=> { // That's how we make server using node's core modules.
    if(req.url === "/birthday"){
        res.end("Happy birthday !");
        return;
    }
    res.end("Hello World !");
})

server.listen(4444);



// But we use Express.js to work with all kinds of stuff. It is a node.js framework.