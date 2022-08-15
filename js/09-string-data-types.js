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

