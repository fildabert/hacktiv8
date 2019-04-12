function checkAB(num) {
    var a = []
    var b = []
    var result = false
    for(i = 0; i < num.length; i++){
        if(num[i] == "a"){
            a.push(i)
        }
        if(num[i] == "b"){
            b.push(i)
        }
    }
    var ab = a[0] - b[0]
    if(ab > 0 && ab <= 4 || ab < 0 && ab >= -4){
        result = true
    }
    else{
        for(j = 0; j < a.length; j++){
            for(k = 0; k < b.length; k++){
                ab = a[j] - b[k]
                if(ab > 0 && ab <= 4 || ab < 0 && ab >= -4){
                    result = true
                }
            }
        }
    }
    return result
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
console.log(checkAB("a1234b12b12a"))