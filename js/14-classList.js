// JavaScript'te CSS class'larını manipule etmenin en iyi yollarından biri classList kullanmaktır.
// classList, bir öğenin sınıf isimlerini DOMTokenList olarak döndürür.

// liste içerisindeki son elemana ulaşmak veya eleman eklemek

let lastChild = document.querySelector("ul#list>li:last-child");
console.log(lastChild); 
console.log(lastChild.innerHTML);  // Officiis.

// ilk elemen
let firstChild = document.querySelector("ul#list>li:first-child");
console.log(firstChild);
console.log(firstChild.innerHTML);  // lorem



// listeye ulaşmak

let ulDOM = document.querySelector("ul#list");  // listeye ulaştık  

let liDOM = document.createElement("li");    // yeni bir li öğesi oluturuldu

liDOM.innerHTML = "Kendi oluşturduğumuz Oge";  

// elemnı listeye ekledk
ulDOM.append(liDOM);  // en sona ekler
ulDOM.prepend(liDOM);  // en başa ekler


// CSS class eklemek veya çıkarmak

let list = document.querySelector("ul#list");
list.classList.add("text-primary");

list.classList.remove("text-primary");
