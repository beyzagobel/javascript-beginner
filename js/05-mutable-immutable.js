// Primitive Types : Değer bazlı tiplerdir, değerleri turarlar ki buda değer değişdiğinde diğerini değişmesini engeller (immutable)
let a = 5 ; 
let b = a ;   // a'nın bellekte bir koyası oluşur ve bunu b referans eder

a = 21;    // a'daki değişiklik b'yi ya da tam tersi bir değişiklik diğerini etkilemez.

console.log(a);  // 21
console.log(b);  // 5 

// Non-Primitive Types : Değişkenlerin bellek üzerinde referans edildikleri adreslerine doğrudan eşitlenir, mutable (değiştirilebilir)

let obj = {
    surname : "beyza",
    lastname : "gobel",
    age : 23
}

let obj2 = obj ;  // obj ve obj2 bellekte aynı yeri referans edttikleri için ikisinden birinde yapılan değişiklik ikisinide etkilemektedir .

obj2.surname = "Beyza";


console.log(obj.surname);   // Beyza
console.log(obj2.surname);  // Beyza  





