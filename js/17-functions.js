/*
 * Belirli bir amacı gerçekleştirmek için oluşturulan yapıalrdır.
 * Bir fonksiyon bir veya birden fazla parametre alabilir veya hiç almayabilir.
 * Bir fonksiyon dışarıya bilgi gönderebilir veya göndermeyebilir.
 * Mğmkğnse fonksiyonun bağımlılıkları azaltmak gerekir.
 */


// Regular/Named Function : Normal - Adlandırılmış FOnksiyonlar
function printHello(name){  // name : function parametresi
    console.log(`Merhaba ${name}`);  // fonksiyonun body'si
}
printHello("Beyza");  // argüman


// Anonymus Function : Adlandırılmamış , bir değişkene atanarak yeri geldiğinde kullanılırlar.

var f = function(sayi1,sayi2){
    console.log(sayi1 + sayi2);
}


// Değer Dündüren Fonksiyonlar

function addition(sayi1,sayi2){
    return sayi1 + sayi2 ;
}
var toplam = addition(5,2);
console.log(toplam);


// Nested Functionss : İç içe fonksiyonlar

function programDetay(bootcamp, organizasyon){
    const tumProgram = () => `${bootcamp} ${organizasyon}`;

    console.log('Basladi,'+ tumProgram());
    console.log('Bitti,'+ tumProgram());
}



function sayacArtir(){
    let sayac = 0 ;

    return function(){
        return sayac++;
    };

}

// Recursion Function = Bir fonksiyonun kendini tekrar çağırdığı fonksiyonlardır.

function pow(sayi1, sayi2){
    if(sayi2 == 1){
        return sayi1;
    }
    else if(sayi2 == 0){
        return 0;
    }
    else{
        return sayi1 * pow(sayi1, sayi2 - 1);
    }

}
alert(pow(3,6));  


