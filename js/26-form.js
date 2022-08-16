// Amaç her submit butonuna basılınca bir get isteği gider ve sayfa yenmileniry otomatik olarak biz bu yenileme işlemin yaomak istemiyorruz diyeilm : 

let formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit",formSubmit);


function formSubmit(event){
    event.preventDefault();   // default(ger/post) işlemini engelledi ve sayfa yenilenmiyor
    console.log('İŞLEM GERÇEKLEŞTİ');
    let scoreInputDOM = document.querySelector("#score");
    console.log(scoreInputDOM.value);  // input un valıue si alınır
    localStorage.setItem("score",scoreInputDOM.value);
}



