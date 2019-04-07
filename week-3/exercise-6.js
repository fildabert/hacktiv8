function angkaPalindrome(num){
    var palindrome = false
    var result = ""
    
    for(h = 0; palindrome === false; h++){
        num ++
        var numStr = "" + num
        var i = numStr.length - 1
          for(i = numStr.length - 1; i >= 0; i--){
            result += numStr[i]
         }
          if(result == num){
            palindrome = true
         }
         
        result = ""
    }
    console.log(num)
}
angkaPalindrome(8)
angkaPalindrome(10)
angkaPalindrome(117)
angkaPalindrome(175)
angkaPalindrome(1000)

