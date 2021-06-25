const { date } = require("../dist");

var res = date(+"17.84", [2003, 4, 1]);

console.log(res);

console.log(res.getUTCFullYear());

console.log(res.getUTCMonth() + 1); // Months start at 0

console.log(res.getUTCDate());
