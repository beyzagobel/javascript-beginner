/*
Declaration : Değişken oluşturma. Değer atamadan sadece değişken oluşturma işlemine denir.
Değişken oluşturduğumuzda ve bir değer atamadığımızda değişkenin değeri default olara undefined atanır.

Initialization : Bir değişkene ilk değer ataması işlemine denir.
*/



// 1- var ile DEĞİŞKEN TANIMLAMA , FUNCTİON SCOPE 


// var ile değişkenin değerini değiştirebiliyouruz
var age = 12;
age = 11;

// var ile aynı isimde değişken tekrar tanımlanabilir ve değeri güncellenebilir
var fName = "beyza";

console.log(fName);

var fName = "Beyza";

console.log(fName);

// Hoisting 

number = 21;
console.log(number);
var number;

// 2- let ile DEĞİŞKEN TANIMLAMA , BLOCK SCOPE {}


// değişken tekrar tanımlanamaz fakat değeri güncellenebilir
let lName = "gobel";
console.log(lName);

lName="Gobel";
console.log(lName);


/* Hatalı Kullanım: let ve const kavramlarında Hoisting geçerli değildir.

number2 = 32;
console.log(number2);
let number2;    Not defined

*/


// const ile DEĞİŞKEN TANIMLAMA : const tanımlandığı yerde initial edilmeli ve sonradan değeri değiştirilemez

// HATALI KULLANIM: const number3;  

const number3 = 32;
// number3 =23;  HATA : Assignment to constant variable