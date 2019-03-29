var hour = 0

function konversiMenit(menit) {
    while(menit >= 60){
      menit -= 60
      hour += 1
      
    }
    
    if(menit <= 9){
      console.log(hour + ":0" + menit)
    }
  else {
    console.log(hour + ":" + menit)
  }
    hour = 0
  }


// TEST CASES
konversiMenit(63); // 1:03
konversiMenit(124); // 2:04
konversiMenit(53); // 0:53
konversiMenit(88); // 1:28
konversiMenit(120); // 2:00
konversiMenit(361);
konversiMenit(763);
