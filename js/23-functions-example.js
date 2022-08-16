
let counter = 0;
let counterDOM = document.querySelector("#counter");

let artirDOM = document.querySelector("#artir");
let azaltDom = document.querySelector("#azalt");

counterDOM.innerHTML = counter;

azaltDom.addEventListener("click",clickEvenet)

artirDOM.addEventListener("click",clickEvenet)

function clickEvenet(){
    console.log(this.id);
   if( this.id=="artir"){
    counterDOM.innerHTML = ++counter;
   } 
   else{
    counterDOM.innerHTML = --counter;

   }

}

