function spellBackwards(text){
    var textBackwards= ""
      for(x = 1; x <= text.length; x++){
        textBackwards += text[text.length - x]
      }
    console.log(textBackwards)
  }
  
  spellBackwards("John Doe")
  spellBackwards("Indomie Seleraku")