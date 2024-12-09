// This file is the entry point for node.js

console.log("Node.js Initialised !");

// const { calculateSum } = require("./sum");
// const { calculateMultiply } = require("./multiply"); // We exported these two seperately 

const {calculateSum, calculateMultiply} = require("./calculate");

const a = 10;

const b = 20;

calculateSum(a,b);
calculateMultiply(a,b);