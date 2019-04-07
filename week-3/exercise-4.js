var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung" );
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input);
    var birth = input[3]
    var birthSplit = birth.split("/");
    switch(birthSplit[1]){
        case "05":
        console.log("Mei")
        break;
    }
    birthSplit.sort(function(value1, value2) {return value1 < value2})
    console.log(birthSplit);
    
    var birthJoin = birthSplit.join("-")
    console.log (birthJoin)
    
    var nameSlice = input[1].slice(0, 14)
    console.log(nameSlice)
    
}

dataHandling2(input)