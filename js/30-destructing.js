// Bİr fonksiyona veya metdoda argüman olarak obje göndermek ve parametre oalraka obje almak en temiz ve risksiz yoldur

const cikarma = (sayilar) =>{
    return sayilar.sayi1 - sayilar.sayi2;
}
const sayilar = {
    sayi1: 2,
    sayi2 : 3
}
cikarma(sayilar);

// Destructuring : Bir obk-je veya array içinden her bir elemanın alınıp bir değişken içine kaydedilir.

const toplama = ({sayi1,sayi2}) =>{   
    // {} destructuring temsil eder.fonk içinde artık devamlı sayılar dememize gerek yok, sayilar objesininn içindeki sayi1 ve sayi2 property lerinin bulup parçalayarak fonk içinde kullanılanbilir hale getirmisştir
    return sayilar.sayi1 - sayilar.sayi2;
}
const sayilar2 = {
    sayi1: 2,
    sayi2 : 3
}
cikarma(sayilar);



// burada nesnenin içindeli elemanlar değişkenlere atanabilir

let user = {
    username :"jsfk",
    age : 21,
    job: "engineesr"

}

let {username : kullaniciAdi,age,job} = user ;
console.log(kullaniciAdi);  // nesnenin adınmı değiştirerek(rename) farklı bir adda değişklene atayabiliriz.

console.log(age);


// obje içindeki bazı bilgileri değişkene atayabilfiğimiz gibi, istediğimiz diğer elemanları başka bir nesneyede atabiliriz

let user2 = {
    ad : "bjksf",
    yas : 21,
    meslek: "mühendis"
}

let {ad, yas, ...newUser} = user2 ;

console.log(ad,yas);

console.log(user2.meslek);

