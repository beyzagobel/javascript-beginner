let counter = 4231;
console.log(typeof(counter));  // number

counter = false;
console.log(typeof(counter));   // boolean

counter = "deneme";
console.log(typeof(counter));   // string

// undefined : tanımsız, değer atanmamış
let x ;
console.log(x);  // undefined
console.log(typeof(x));  // undefined

//console.log(a);  // a is not defined
console.log(typeof(a));   // undefined


let obj ;
console.log(typeof(obj));   // undefined


let obj2 = null;
console.log(typeof(obj));   // object

console.log(null == undefined);  // true


Boolean(0);  // false
Boolean("");  // false
Boolean(null);  // false

let username = "beyza";
Boolean(username.length > 0);  // true


