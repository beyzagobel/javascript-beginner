// Bir fonksiyon kendi kapsamı dışında bir değişkeni kullanıyorsa ve 
// bu fonksiyon başka bir kapsamdan çalışıtırılsa bile o değişkene halen erişebilir


function basla(){
    var ad = "beyza";

    function yazdir(){   // dahili fonksiyon, closure
        console.log(ad);
    }

    yazdir();
}
basla();
// basla() fonk çağrıldıktan call stack'den atılır ve sonra ad değişkenide GC tarafından aatılmasını bekleriz fakat closure sayesinde buna iizn verilmez ve yazdir methodu tarafından hala erişilebilir durumda kalır.

function basla(){
    var ad = "beyza";
    setTimeout(function(){
        console.log(ad);
    },1000);
}
basla();


function basla() {
    var sayi = 0;
    
    setTimeout(function(){
      console.log(sayi++);
        setTimeout(function(){
        console.log(sayi++);
          setTimeout(function(){
            console.log(sayi++);
          
          },100); 
        },200); 
    },300); 
    
  }
  basla(); // 0 1 2


  function basla() {
    for(var i = 1; i<=5;i++){
        setTimeout(function(){
            console.log(i);
          },i*1000);     }
  }
  basla();  //6 6 6 6 6


  
function basla() {
    for(var i = 1; i<=5;i++){
    (function(i){ //IIFE    Anında Çağrılan Fonksiyon
        setTimeout(function(){
          console.log(i);
        },i*1000); 
      
      })(i);
    }
  }
  basla(); //1 2 3 4 5



  function basla() {
    for(let i = 1; i<=5;i++){
      setTimeout(function(){
        console.log(i);
      },i*1000); 
    }
  }
  basla(); //1 2 3 4 5