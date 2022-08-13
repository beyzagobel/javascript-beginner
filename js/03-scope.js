/*
 Scope : Uygulamadaki değişkenlerin ve fonksiyonların nerelerde erişilebilir,
 nerelerde erişilemez olduklarını belirler.

*/

// Global Scope : Değişkenler, fonksiyonlar içerisinden de erişilebilir.

var hello = "Hello";

function f1(){
    console.log(hello);
}
f1();



// Function/Local Scope : var ile tanımlanan bir değişken, bir fonksiyon içerisinde oluşturulmuş ise,
// sadece o ve nested(iç içe) fonksiyon içerisinde çağırılıp kullanılbilirler. let içinde aynısı geçerlidir.

function getDate(){
    var date = new Date();
    return date;
}
getDate();
console.log(date); // date is not defined HATA!



function getDate2(){
    var date = new Date();

    function modifyDate(){
        return date.toDateString();
    }
    return modifyDate();
}
getDate();
console.log(date); // date is not defined


// Block Scope : var ile tanımlanan değişkenler blok kapsamına sahip değilken, let bu kapsama sahiptir.

for(var i = 0 ; i < 2; i ++){  // block scope
    var x = 3;
}
console.log(x);  // 3
console.log(i);  // 2


var a = 10;

if(true){
    var a = 2;
}

// a = 2 oldu 


var a = 10;

if(true){
    let a = 5;  // block scope 
}
// a = 10 dir


var i = 5;
for(var i = 0 ; i < 10 ; i ++){
    // kodlar
}
console.log(i); // i = 10


let i = 5;
for(let i = 0 ; i < 10 ; i ++){
    // kodlar
}
console.log(i);  // i = 5


// Global Nesne : BOM(Browser Object Model), window

var test = "test";
console.log(window.test);

let test2 = "test2";
console.log(window.test2);  // undefined