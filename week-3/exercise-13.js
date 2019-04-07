    function targetTerdekat(arr) {
    var result = ""
    var numofx = 0
    for(x = 0; x < arr.length-1; x++){
        if(arr[x] == "x"){
            numofx += 1
        }
    }
    if(numofx === 0){
        return result = 0
    

    } else 
    for(o = 0; arr[o]!== "o"; o++){
    }
    for(x1 = o - 1; arr[x1] == " "; x1--){   
    }
    for(x2 = o + 1; arr[x2] == " "; x2++){   
    }


    if(x1 == -1){
        result = x2 - o
    } 
    else if(x2 == arr.length){
        result = o - x1
    }

    else{
    var remainder1 = o - x1
    var remainder2 = x2 - o

    if(remainder1 < remainder2){
        result = remainder1
    }
    else{
        result = remainder2}
    }
    
    return result
    
  }

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2