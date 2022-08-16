/* web de ywpılan değişikliklerin kaydının tutulmasıdır.
 * cookie lerden geçici veriler saklanır 4kb sınırlı dır
 * key value çifti olarak saklanır.
 * 2 tane yerel kayıt türü vardır: 
 * LocalStroge : zaman aşımı yoktur
 * SessionStroge : otourum sonlanana kadar ya da veri kabybolanana kadar tuutlur.
 * Yanlız ikiside kullanıcı tarafından kolayca okunur ve değiştirileibilr. BU yüzden hassas olmayan veriler burada taşınmalıdır.
 */

window.localStorage.setItem("fname","beyza"); // set edilir
window.localStorage.getItem("fname");   // key'in value'si alınır

localStorage.removeItem("fname");  // ilgili key'in değeri silinir
localStorage.clear();  // tüm veriler silinir