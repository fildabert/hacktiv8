function digitPerkalianMinimum(angka) {
    var factor1 = [];
    var factor2 = [];
    for(i = 0; i <= angka; i++){
        if(angka % i == 0){
            factor1.push(i);
            factor2.push(angka/i);
        }
    }
    factor1 += "";
    factor2 += "";
    factor1Arr = factor1.split(",");
    factor2Arr = factor2.split(",");
    var smallest = factor1Arr[0].length + factor2Arr[0].length
    for(j = 0; j < factor1Arr.length -1; j++){
        if(factor1Arr[j].length + factor2Arr[j].length > factor1Arr[j + 1].length + factor2Arr[j + 1].length){
            smallest = factor1Arr[j + 1].length + factor2Arr[j + 1].length;
        }
    }
    return smallest
  }

  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2