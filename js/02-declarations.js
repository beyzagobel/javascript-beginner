/*
Declaration : Değişken oluşturma. Değer atamadan sadece değişken oluşturma işlemine denir.
Değişken oluşturduğumuzda ve bir değer atamadığımızda değişkenin değeri default olara undefined atanır.

Initialization : Bir değişkene ilk değer ataması işlemine denir.

Değişken adlandırırken :
1 - camelCase
    var dersAdi;

2 - UPPER_CASE , const tanımları
    var SERVER_NAME;
    
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

// Hoisting : var ile tanımlanan değişkenlerde ve fonksiyonlar tanımlanmadan önce çağrılabilir

number = 21;
console.log(number);
var number;

merhaba();
function merhaba(){
    console.log("Merhaba");
}

// 2- let ile DEĞİŞKEN TANIMLAMA , Blet ile oluşturulan bir değişken sadece oluşturulduğu yerdekisüslü parantezler içerisinde erişilebilir


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


// const ile DEĞİŞKEN TANIMLAMA : const tanımlandığı yerde initial edilmeli ve değişkenin sonradan değeri değiştirilemez (immutable)

// HATALI KULLANIM: const number3;  

const number3 = 32;
// number3 =23;  HATA : Assignment to constant variable


// Bir nesne içerisinde bir özelliği değiştirmek veya özellik eklemek,
// tekrar atama yapmak değildir. Immutable durumu, oluşturulan nesnenin 
// kendisine yeni bir değer ataması yapılamaması durumdur.

const colors = ["red","green","blue"];
console.log(colors[0]);  // red
colors[0] = "yellow";
console.log(colors[0]);  // yellow

const person ={
    fName : "beyza",
    lName : "gobel"
}
console.log(person.fName);  // beyza
person.fName = "Beyza";
console.log(person.fName);  // Beyza

person = {};  // Assignment to constant variable.


let isActive = true;
let hasPassword = false;