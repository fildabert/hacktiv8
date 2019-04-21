
function totalDigitRekursif(angka) {
    // var angkaArr = [..."" +angka].map(Number)
    // if(angka.length === 0){
    //     console.log(result)
    //     return result = 0;      
    // }
    // else if(angka.length === undefined){
    //     result += angkaArr[0]
    //     angkaArr.shift()
    //     angka = angkaArr
    //     totalDigitRekursif(angka)
    // }
    // else if(angka.length != undefined){
    //     result += angka[0]
    //     angka.shift()
    //     totalDigitRekursif(angka)
    // }
    var result = 0
    function hitung(num){
        var count = 1
        var numArr = []
        var numStr = num.toString().split("")
        for(i = 0; i < numStr.length; i++){
            numArr.push(parseInt(numStr[i]))
        }
        if(num === 0){
            return result
        }
        else{
            for(i = 0; i < numArr.length-1; i++){
                count *= 10
            }
            result += numArr[0]
            count *= numArr[0]
            numArr.shift()
            return hitung(num - count)
    }
    }
   return hitung(angka)
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5