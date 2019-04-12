function ubahHuruf(kata) {
    var kamus = "abcdefghijklmnopqrstuvwxyz"
    var result = ""
    for(i = 0; i < kata.length; i++){
        for(j = 0; kamus[j] != kata[i]; j++){
        }
        result += kamus[j+1] 
    }
    return result
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu