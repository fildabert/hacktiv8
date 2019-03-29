var X = 0
var O = 0
function xo(str) {
    for(i = 0; i <= str.length; i++){
        if(str[i] === "x"){
            X += 1
        } else if(str[i] === "o"){
            O += 1
        }
        
    }
  if(X === O){
      console.log(true)
      
  } else{
      console.log(false)
  }
    X = 0
    O = 0
}

// TEST CASES
xo('xoxoxo'); // true
xo('oxooxo'); // false
xo('oxo'); // false
xo('xxxooo'); // true
xo('xoxooxxo'); // true