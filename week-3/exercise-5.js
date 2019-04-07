function palindrome(kata) {
    var result = ""
    for(i = kata.length; i > 0; i--){
        result += kata[i - 1]
    }
    if(kata === result){
        return true
    } else
        return false
  }
  
  //TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
