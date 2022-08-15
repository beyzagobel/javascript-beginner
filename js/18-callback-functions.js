function print1(){
    console.log('İlk ekran çıktısı');
}

function print2(){
    console.log('İkinci ekran çıktısı');
}

function print3(){
    console.log('Üçüncü ekran çıktısı');
}

print1();
print2();
print3();

// Çıktı
// İlk ekran çıktısı
// İkinci ekran çıktısı
// Üçüncü ekran çıktısı



function print1(){
    console.log('İlk ekran çıktısı');
}

function print2(){
    setTimeout(function(){
        console.log('İkinci ekran çıktısı');
    },3000);
}

function print3(){
    console.log('Üçüncü ekran çıktısı');
}

print1();
print2();
print3();

// Çıktı
// İlk ekran çıktısı
// Üçüncü ekran çıktısı
// İkinci ekran çıktısı

// JS asenkron çalıştığı için print2 fonksiyonunun çalışmasını beklemeden print3 fonksiyonu çalışır 
// BU durumdan kurtulmak için callback fonksiyonu kullanırız.


function print1(){
    console.log('İlk ekran çıktısı');
}

function print2(callback1, callback2) {
    setTimeout(function () {
      callback1();
      console.log("İkinci ekran çıktısı")
      callback2();
    }, 3000);
  }

function print3(){
    console.log('Üçüncü ekran çıktısı');
}

print2(print1,print3);

// Çıktı
// İlk ekran çıktısı
// İkinci ekran çıktısı
// Üçüncü ekran çıktısı
