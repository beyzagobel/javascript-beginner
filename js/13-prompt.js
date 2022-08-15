let ad = prompt("İsim : ");
let soyad = prompt("Soyad : ");
document.write(ad+soyad);   


let merhaba = document.querySelector('#merhaba');
console.log(merhaba.innerHTML);   // Merhaba


merhaba.innerHTML = `${merhaba.innerHTML} <small style="color:red">${ad} ${soyad} </small>`;

