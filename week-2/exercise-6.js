// 1.
var count1 = 0

console.log("LOOPING PERTAMA")
while(count1 < 20){
  count1 += 2;
  console.log(count1 + " -  I love coding");
}

var count2 = 20

console.log("LOOPING KEDUA")
while(count2 > 0){
  console.log(count2 + " - I will become a fullstack developer")
  count2 -= 2
}

// 2.
console.log("LOOPING PERTAMA")
for(count3 = 1; count3 < 21; count3 ++){
  console.log(count3 + " - I love coding");
}

console.log("LOOPING KEDUA")
for(count4 = 20; count4 > 0; count4 --){
  console.log(count4 + " - I will become a full stack developer")
}

// 3.
for(count5 = 1; count5 < 101; count5 ++){
    if(count5 % 2 == 0)
      console.log("counter sekarang = " + count5 + " GENAP");
      else 
        console.log("counter sekarang = " + count5 + " GANJIL");
      
    
  }


  for(count6 = 1; count6 < 100; count6 += 2){
    if(count6 % 3 == 0)
      console.log("counter sekarang = " + count6 + " KELIPATAN 3");
      else 
        console.log("");
      
    
  }

  for(count7 = 1; count7 < 100; count7 += 5){
    if(count7 % 3 == 0)
      console.log("counter sekarang = " + count7 + " KELIPATAN 6");
      else 
        console.log("");
      
    
  }

  
  for(count8 = 1; count8 < 100; count8 += 9){
    if(count8 % 10 == 0)
      console.log("counter sekarang = " + count8 + " KELIPATAN 10");
      else 
        console.log("");
      
    
  }