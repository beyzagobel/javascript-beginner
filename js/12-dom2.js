/*
 * DOM içerisindeki öğeleri erişmek için kullanılan yöntemler:
 * Kimlik(id) ile öğeye erişmek  -> getElementById()
 * Sınıf(class) ile öğelere eirşmek  -> getElementByClassName()
 * Etiket adı ile öğelere erişmek   -> querySelector()
 */

// 1- Elementin ID'si kullanılarak seçme işlemi yapılır.

// getElementById(), sayfada bulunan html elementlerinin ID'leri referans alarak seçme işlemi yapılır.

let hello = document.getElementById('hello');
console.log(hello);  // p#hello
console.log(hello.innerHTML);  // Hello World

console.log(hello.innerHTML="Değişen Bilgi");  // Deneme


// 2- querySelector : id'ler için ön ek olarak diez "#", class için nokta "." kkullanılır

const link = document.querySelector("#link");
console.log(link);  // a#link
console.log(link.innerHTML);  // Link Bilgisi




