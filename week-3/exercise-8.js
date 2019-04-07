function pasanganTerbesar(num){
    var numStr = "" + num;
    var arrSlice = [];
    var newArr = [];
    var i = 0
        for(i = 0; i < numStr.length-1; i++){
            arrSlice = numStr.slice(i, i+2);
            newArr.push(arrSlice);
         }
    
    var finalArr = newArr.map(Number);
    console.log(Math.max.apply(null, finalArr))
  }

  pasanganTerbesar(641573);
  pasanganTerbesar(12783456);
  pasanganTerbesar(910233);
  pasanganTerbesar(71856421);
  pasanganTerbesar(79918293);





// function pasanganTerbesar(num) {
//     var numStr = "" + num;
//     var numArr = numStr.split("")
//     var arrSlice = []
//     var newArr = []
//         for(i = 0; i < numStr.length-1; i++){
//             arrSlice = numArr.slice(i, i+2);
//             newArr.push(arrSlice)
//             console.log(newArr)
//          }
//     var finalArr = []
        
//          for(j = 0; j <= newArr.length-1; j++){
//              finalArr.push([newArr[j].join("")].map(Number))
//             console.log(finalArr)
             
//          }
//     var finalArr2 = finalArr.join(",").split(",").map(Number)
//     console.log(finalArr2)
//     console.log(Math.max.apply(null, finalArr2))
//   }



//   pasanganTerbesar(641573)
  