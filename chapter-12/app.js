const http = require("node:http");

const server = http.createServer((req, res)=> { // That's how we make server using node's core modules(Old method)
    if(req.url === "/birthday"){
        res.end("Happy birthday !");
        return;
    }
    res.end("Hello World !");
})

server.listen(4444);



// But we use Express.js to work with all kinds of stuff. It is a node.js framework.




// ----------------New method of creating server using express---------------------------------- 


// const { userAuth } = require("./middlewares/auth"); // Here userAuth is middleware for user-Authentication

// app.use("/user", userAuth);

// app.get("/user/:userId/:city", (req, res)=> { // Here in user route, userId, city are dynamic parameters
//     console.log(req.params); // To get parameters from route, you can use params method
//     res.send({firstname : "Nitin", lastname : "Shukla"});
// })

// app.get("/user/get-user-profile", (req, res)=> {
//     console.log(req.query);
//     res.send("Successfully executed query");
// })
// app.post("/user/update-user-profile", (req, res)=> {
//     res.send("Data is successfully stored to DB");
// })

// app.use("/test", (req, res) => {
//     throw new Error("ashahgdahgdahgar]e[shwehiuorwrtoichkgba");
//     res.send("This is the test page!");
// })

// app.use("/", (err, req, res, next) => { // this will only run when any error occure in your program. It is always written in the end** remember it.
//     if(err){
//         res.status(500).send("something went wrong"); // That's how we handle error gracefully.
//     }
// })

// app.use("/", (req, res) => {
//     res.send("Hello World !!");
// })

// app.listen(4000, ()=> {
//     console.log("Server is successfully running on port 4000");
// })    