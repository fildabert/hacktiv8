function fpb(angka1, angka2) {
  var arr1 = []
  var arr2 = []
  var result = []
  for(i = 1; i <= angka1; i++){
      if(angka1 % i == 0){
          arr1.push(i)
      }
  }
  for(j = 1; j < angka2; j++){
      if(angka2 % j == 0){
          arr2.push(j)
      }
  }
  for(k = 0; k < arr1.length; k++){
      for(l = 0; l<arr2.length; l++){
          if(arr1[k] == arr2[l]){
            result.push(arr1[k])
          }
      }
  }
  return Math.max(...result)
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1