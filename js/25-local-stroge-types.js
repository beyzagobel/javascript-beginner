let user = {
    userName: "beyzagobel",
    isActive : true
}
 localStorage.setItem("user",user);  // [object Object]

 // kompleks objeler için JSON.stringfy() kullanılır

 localStorage.setItem("user",JSON.stringify(user));  // {"userName":"beyzagobel","isActive":true}	

 // stringfy dan veri alma parse() ile yapılır
 
 user = JSON.parse(user); 



 
