const { age } = require("../dist/index");

console.log(age([2003, 4, 1], null, { toString: true }));

console.log(age([2021, 4, 1], null, { toString: true }));

console.log(age([2021, 6, 1], null, { toString: true }));

console.log(age([2021, 6, 20], null, { toString: true }));

console.log(age([2021, 6, 25], null, { toString: true }));
