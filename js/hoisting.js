// Hoisting = YUkarı çıkarma, Bir değişken değer tanımlandıktan sonra deklare edilebilir
x = 5;
console.log(x);
var x;



y = 1;
z= 2;
console.log(y+z)
var y,z;



var a = 1;
console.log(a+b);
var b =4;


// JavaScript var anahtar kelimesi için hoisting uygularken let ve const için aynı özellik geçerli değildir.


l = 5;
console.log(l);
let l ;


// Mümkün olduğunca deklarasyonları en başta yapmak akıllıca olur.