// Konversi Menit

// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu dalam menit. 
// Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
  // you can only write your code here!
  var split = menit / 60;
  var jam = Math.floor(split); /// pembagian jam

  var hasil = menit - (jam * 60); // sisa pembagian
  if (hasil.toString().length === 1){
    hasil = '0' +hasil;
  } 

  return jam +':'+ hasil
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00