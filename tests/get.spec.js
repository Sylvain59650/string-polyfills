var Path = require("../sources/passthrough-object.js");

var obj = { a: 1, b: { c: 3, d: 4, e: [{ f: '5', g: '6' }, { f: '7', g: '8' }, { f: '9', g: '10' }] } };

console.log("bd", Path.get(obj, "b.d", null));
console.log("bef", Path.get(obj, "b.e.0.f", null));
console.log("bef", Path.get(obj, "b.e[0].f", null));
console.log("be", Path.get(obj, "b.e", null));

var be = Path.get(obj, "b.e", {});
be.push({ f: "11", g: "12" });

console.log(be);
console.log(Path.get(obj, "b.e", {}));