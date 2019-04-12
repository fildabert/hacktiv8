function angkaPrima(angka) {
    var prime = true;
    var angkaSqrt = Math.round(Math.sqrt(angka));
    for(i = 2; i <= angkaSqrt; i++){
        if(angka % i == 0 && angka % 1 == 0 ){
            var prime = false
        }
    }
    return prime
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false