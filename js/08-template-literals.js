// Kullanımı :

// 1- Çok satırlı dize yazımı:

let str = `Dersler:
Matematik,
Türkçe`;

// 2 - İnterpolasyon : Metin içerisinde değişken kullanmak anlamındadır.

let fname = `Beyza`;
let surname = `Gobel`;

// Eski kullanım
console.log("My name is " + fname +" "+ surname);

// Yeni kullanım
console.log(`My name is ${fname} ${surname}`);

let a = 5;
let b = 6;

console.log(`${a} çarpı ${b} eşittir ${a*b}`);


const ad = `Beyza`;
const soyad = `Gobel`;
const yas = 23;

const kisi = `
<p>${ad}</>
<p>${soyad}</>
<p>${yas}</>
`;

document.body.innerHTML = kisi ;

