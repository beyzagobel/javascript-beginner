// length : String ifadenin karakter uzunluğunu verir

let fname = "Beyza";
console.log(fname.length);   // 5

// indexOf : Metnin içerisindeki istenilen değerin index numarasını verir.Index 0'dan başlar

console.log(fname.indexOf("z"));  // 3

// lastIndexOf , lastIndexOf

// search : indexOf ile aynı sonuçlara ulaşılınır. Regular Expressions işlemleri için çok kullanılır.
 var isim = "Beyza Gobel";
 console.log(isim.search("Go"));  // 6

// slice : Metinden parça alınır

console.log(isim.slice(2,5));   // yza  
console.log(isim.slice(2));  // yza Gobel

// replace : Aranan metni istenilen ile değiştirilir

console.log(isim.replace("Gobel", "Göbel"));  // Beyza Göbel

// toUpperCase, ToLowerCase

console.log(isim.toUpperCase());  // BEYZA GOBEL
console.log(isim.toLowerCase());  // beyza gobel

// concat : metin birleştirme, iki string veri birleştirilir.

var ad = "Beyza";
var soyad = "Gobel";
console.log(ad.concat(" ", soyad));   // Beyza Gobel


// Split : Metni diziye çevirme , KUllanılan parametre  ile metni nasıl parçalanacağı belitilir.

console.log(isim.split(" "));  // ['Beyza', 'Gobel']


// String bir ifadenin içerisinde aradığımız karakterin yerini bulmak için 2 yöntem vardır. [] ve charAt()
console.log(ad[0]); //"B"
console.log(ad.charAt(2)); //"y"

// ilk harf büyük diğer harfler küçük yapma
var deneme = "DENEME";
deneme = `${deneme[0].toUpperCase()}${deneme.slice(1).toLowerCase()}`;
console.log(deneme);  // Deneme


let url = "www.beyzagobel.com";
let language = "Java";

 // language değişkeninin değerini JavaScript olarak değiştiriğ konsola yazın
 language = language.replace("Java","JavaScript");
 console.log(language);

 //url değişkeninin www olmadan domain(beyzagobel.com) adında yeni değişken oluşturun ve kosola yazdırın
 
let nokta = url.indexOf(".");
let domain = url.slice(nokta+1);
console.log(domain);   // beyzagobel.com