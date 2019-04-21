function kaliTerusRekursif(angka) {
    var result = 1
    var angkaStr = angka.toString().split("")
    var angkaArr = []
    for(i = 0; i < angkaStr.length; i++){
        angkaArr.push(parseInt(angkaStr[i]))
    }
    for(i = 0; i < angkaArr.length && angka.length == undefined; i++){
        result *= angkaArr[i]
    }
    for(i = 0; i < angka.length; i++){
        result *= angka[i]
    }
    if(result > 10){
        result = result.toString().split("")
        resultArr = []
        for(i = 0; i < result.length; i++){
            resultArr.push(parseInt(result[i]))
        }
        angka = resultArr
        kaliTerusRekursif(angka)
    }
    else{
        return console.log(result)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6