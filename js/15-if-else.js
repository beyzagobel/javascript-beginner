// eğer kullanıcı bilgisi varsa ekrana yazdır

let username = prompt("Kullanıcı adınızı giriniz : ");

if(username != null){
    document.write(username);
}


// or

if(username.length>0){
    document.write(username);
}