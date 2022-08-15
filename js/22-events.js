let greating = document.querySelector("#greating");

greating.addEventListener("click",function(){
    console.log('tıklandı');
})



greating.addEventListener("click",domClick)

function domClick(){
    console.log('tıklandı');
    console.log(this.innerHTML=" bilgi değiti");
    this.style.color == "red" ? this.style.color ="black" : this.style.color ="red";  // kırmızı mı ,kırmızısya siyah, değise kırmızı yap
}