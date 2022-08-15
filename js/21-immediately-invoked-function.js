/*
 * Anında Çağrılan Foksiyon
 * Tanımladığımız fonksiyonu çağırmamıza gerek kalmadan , tanımlandığı yerde anında çalışan fonksiyondur
 * Fonksiyon () ile sarmalamalı ve (); ile bitmelidir
 * Birincil amacı bir defaya mahsus çalışması gereken kodların js'in global değişken listesine hiç bulaşmadan, kendi bloğunda kodlarımızın çalışması içindir
 * Böylelikle yerel değişkenler kullanıldığı için kod optimize olur ve bir miktarda olsa performans artışu gözlenir.
 * 
 */



// Hiç bir isim vermeden çağırmamıza gerek yoktur direk tanımlandığı yerde çalışır

(function (){
    console.log('Bu bir mesajdır');
})();




// Arrow fonksiyonlarda da kullanbaliriz.IIFE'ler parametre alabilir

((fname, job) => {
    let age = 23;
    console.log(fname, job, age);
})("Beyza","computer engineer");   // Beyza computer engineer 23


//IIFE'ler return değeri alabilir ve istenildiği durumda değişkene atanabilir.

let takim = "fenerbahçe";
let mesaj = ((value) => {
    return `beyza ${value} yi tutuyor`
})(takim);
console.log(mesaj);

