/*
 her bir fonksiyonun bir görevi olmalıdır
 Bir fonskiyon dışarıya az bapımlı olmalıdır.
 Gllobal değişklne ve fonksiyon variable(default parametre) ı farklıdır
 Outher environment
 */


 function domIdWriteInfo(id,info){
    let domObject = document.querySelector(`#${id}`)
    domIdWriteInfo.innerHTML+= info;
 }

