function cariMedian(arr) {
    var i = 0
    var result = 0
    if(arr.length % 2 == 0){
        i = arr.length/2
        result = arr[i - 1] + arr[i]
        result /= 2
    }
    else{
        result = arr[Math.round(arr.length/2) - 1]
    }
    return result
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5