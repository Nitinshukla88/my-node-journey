// This code will demonstrate the working of asynchronous javascript and the role of Libuv in the execution of that code.

const crypto = require("node:crypto"); // "node:" shows that it is a core node.js module.

console.log("Hello world");

let a = 314644;
let b = 12938;

crypto.pbkdf2Sync("password", "salt", 6000000, 50, "sha512"); // It is a synchronous function so it'll block the main thread !

console.log("Synchronous key is generated !");

crypto.pbkdf2("password", "salt", 6000000, 50, "sha512", (err, key) => {
    console.log("key is generated !");
});

setTimeout(()=> {
    console.log("I'm inside setTimeout");
}, 4000)


const multiply = function (a, b){
    const result = a * b;
    return result;
}

let value = multiply(a, b);

console.log(value);
