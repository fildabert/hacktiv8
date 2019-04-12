function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var bayar = 0;
  var found = false;
  var stop = false;
  var result = []

  for(i = 0; i < arrPenumpang.length; i++){
    for(j = 0; found == false && j < arrPenumpang[i].length; j++){
        for(k = 0; found == false && k < rute.length ; k++){
            if(arrPenumpang[i][1] == rute[k]){
                found = true;
            }
        }
        if(found === true && stop === false){
            for(l = k; l < rute.length && stop === false; l++){ 
                bayar += 2000;
                if(arrPenumpang[i][2] == rute[l]){
                    stop = true;
                }
            }
        }
    }
    result.push(
        {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: bayar
        }
    )
    bayar = 0;
    found = false;
    stop = false;
  }
  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]