
/* Değeri korunmayan bir verideki yapılan değişiklik program açısından beklenmedik yerleri etkileyebilir
Örneğin elimizde bir nesne var ve nesne üzerinde değişiklik yapmak istemiyoruz
fakat orjinal nesnenin herhangi bir değişikliğe uğramasını istemiyoruz. JS de değişmezliği nasıl sağlarız ?
 */
// 1- Object Spread : Orijinal nesne korunur ve özelliklerini kopyalayarak yeni nesne oluşturulur fakat performans açısından pahalı bir işlemdir.

const person = {
    name : "beyza",
    lastname : "gobel"
}

const newPerson = {
    ...person,
    name : "Beyza",
    lastname : "Gobel"
}

console.log(person == newPerson);   // false

console.log(person);
console.log(newPerson);

// 2- Object.assign() : Orjinal nesne korunur ve değişikliker yeni nesnede  uygulanır falar performans açısından iyi bir pratik değildir.

let obj = {
    name :"Robert"
}

let copyObj = Object.assign({name:"Wayne"}, obj);

console.log(obj === copyObj);   // false
// a:1 , b:2

copyObj.name = "Drek";

console.log(obj);   

console.log(copyObj);  


// 3- Object.freeze() : Nesne tamamen değişmez yapılabilir. Deep copy özelliktedir. Maliyetlidir.

/* 4 - Immmutable.js : Karmaşık tipleri değişmez yapılara dönüştürmek için kullanılan  bir kütüpanedir
Perfonramans ve kalıcılık gibi özelliklere sahiptir. Çok daha düşük maliyetli daha hızlı işlem yapmayı sağlar
Verinin hem değişmez(immutable) hem de kalıcı(persistent) olmasını sağlar.
*/


// array push - mutable (native JavaScript)
const heros = ["hulk"];

heros.push("vision");

console.log(heros);   // hulk, vision


// list push - immutable (immutable.js)

const heros2 = Immutable.List.of("hulk");

heros2.push("vision");

console.log(heros2);   // vision


// 

const heros3 = Immutable.List.of("hullk");
const newHeros = heros3.push.push("vision");

console.log(heros3);
console.log(newHeros);

