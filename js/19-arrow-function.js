function func1(){
    return "Merhaba";
}
console.log(func1());

var func2 = function(){
    return "Merhaba";
}
console.log(func2);

// Arrow Function

var arrowFunc = () => {
    return "Merhaba";
}
console.log(arrowFunc());

var carpim = (sayi1,sayi2) => sayi1 * sayi2 ;
/*
    // Daha uzun hali ise;
    const carpim = function(sayi1,sayi2){
      return sayi1 * sayi2;
    }
  */
console.log(carpim(1,2));

const helloWorld = () => console.log('Hello World');




let experience = prompt("Kaç yıllık deneyime sahipsiniz : ");

const developer = experience < 5 ? () => alert("Bilmiyorum") : () => alert("deneyimliyim")

developer();



