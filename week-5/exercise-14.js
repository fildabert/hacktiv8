function changeVocals (str) {
    var kamusKecil = "abcdefghijklmnopqrstuvwxyz"
    var kamusBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var vocalKecil = "aeiou"
    var vocalBesar = "AEIOU"
    var result = ""
    for(i = 0; i < str.length; i++){
        var found = false
            for(j = 0; j < vocalKecil.length; j++){
                if(str[i] === vocalKecil[j] || str[i] == vocalBesar[j]){
                    for(k = 0; k < kamusKecil.length; k++){
                        if(vocalKecil[j] === kamusKecil[k] && str[i] !== vocalBesar[j]){
                            result += kamusKecil[k+1]
                            found = true
                        }
                        else if(vocalBesar[j] === kamusBesar[k]){
                                result += kamusBesar[k+1]
                                found = true
                    }
                }
            }
            }
        if(found == false){
            result += str[i]
        }
        
    }
    return result
  }
  
  function reverseWord (str) {
    var str = changeVocals(str)
    var result = ""
    for(i = str.length -1; i >= 0; i--){
        result += str[i]
    }
    return result
  }
  
  function setLowerUpperCase (str) {
    var str = reverseWord(str)
    result = ""
    for(i = 0; i < str.length; i++){
        if(str[i] == str[i].toLowerCase()){
            result += str[i].toUpperCase()
        }
        else{
            result += str[i].toLowerCase()
        }
    }
    return result
  }
  
  function removeSpaces (str) {
    var str = setLowerUpperCase(str)
    result = str.split(" ").join("")
    return result
  }
  
  function passwordGenerator (name) {
    if(name.length < 5 || name.length == undefined){
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    }
    else{
    var result = setLowerUpperCase(name)
    return result
    }
  }
  
//   console.log(changeVocals("Sergei DrAgunov"))
//   console.log(reverseWord("Sergei DrAgunov"))
//   console.log(setLowerUpperCase("Sergei DrAgunov"))  
//   console.log(removeSpaces("Sergei DrAgunov"))
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'