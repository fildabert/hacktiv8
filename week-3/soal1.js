function countDistance(arr, money) {
    var found = false
    var jarak = 0
    var result = ""
    for(i = 0; i < arr.length && found == false; i++){
        for(o = 0; found == false && o < arr[i].length; o++){
            if(arr[i][o] == "o"){
                found = true
            }
        }
    }
    found = false
    for(o = o; found== false && money != 0 && o < arr[i - 1]. length; o++){
        if(arr[i - 1][o] == ""){
            jarak += 10
        }
        else if(arr[i - 1][o] == "o"){
            found = true
        }
        else if(arr[i - 1][o] == "x"){
            jarak += 10
            money -= 10000
        }
    }
    if(money === 0){
        var o2 = o
    }
    if(found == false){
        for(i = i ; found == false && money != 0 && i < arr.length; i++){
            for(o2 = 0; found == false && money != 0 && o2 < arr[i].length; o2++){
                if(arr[i][o2] == ""){
                    jarak += 10
                }
                else if(arr[i][o2] == "o"){
                    found = true
                }
                else if(arr[i][o2] == "x"){
                    jarak += 10
                    money -= 10000
                }
            }
        }
    }
    if(money === 0){
        var sisaJarak = 0
        for(o2 = o2-1; found == false && o2 < arr[i - 1].length -1; o2++){
            if(arr[i-1][o2] == "o"){
                 found = true
            }
            else{
            sisaJarak += 10
            }
        }
    if(found == false){
        for(i = i; found == false && i < arr.length; i++){
            for(o2 = 0; found == false && o2 < arr[i].length; o2++){
                if(arr[i][o2] == "o"){
                    found = true
                }
                else{
                    sisaJarak +=10
                }
            }
        }
    }
    }
  if(money == 0){
    result += "Uang anda habis, jarak tersisa sampai tujuan adalah " + sisaJarak + "km" 
  }  
  else{
      result += "Sisa uang : " + money + ", jarak tempuh: " + jarak + "km"
  }
  return result
  }
  
console.log(countDistance([
  ['', 'o', '', '', 'o'],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
], 40000))
// output:
/* Sisa uang : 40000, jarak tempuh: 20 km */

console.log(countDistance([
    ['', '', 'o', '', ''],
    ['', 'x', ''],
    ['', '', '', '', '', 'x'],
    ['', 'o', '', '']
  ], 50000))
  // // output:
  // /* Sisa uang : 30000, jarak tempuh: 120 km */
  
  console.log(countDistance([
    ['', '', '', '', ''],
    ['o', 'x', 'x', 'x', ''],
    ['', '', '', 'x', '', 'x'],
    ['', 'o', '', '']
  ], 40000))
  // // output:
  // /* Uang anda habis, jarak tersisa sampai tujuan adalah 30 km*/
  
console.log(countDistance([
  ['', 'o', 'x', 'x', 'x', 'x'],
  ['o', '', '', '', ''],
  ['', '', '', '', ''],
], 30000))
// // output:
// /* Uang anda habis, jarak tersisa sampai tujuan adalah 10 km*/