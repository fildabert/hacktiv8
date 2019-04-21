function sorting(arrNumber) {
    var largest = 0
    for(i = 0; i < arrNumber.length; i++){
        if(largest < arrNumber[i]){
            largest = arrNumber[i]
        }
    }
    return largest
  }
  
  function getTotal(arrNumber) {
    var largest = sorting(arrNumber)
    console.log(largest)
    var count = 0
    for(i = 0; i < arrNumber.length; i ++){
        if(arrNumber[i] == largest){
            count++
        }
    }
    return "angka paling besar adalah " + largest + " dan jumlah kemunculan sebanyak " + count + " kali."
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
console.log(getTotal([2, 8, 4, 6, 8, 5, 8, 4]))
  // console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
//   console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//   //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
//   console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//   //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
//   console.log(mostFrequentLargestNumbers([]));
  // ''