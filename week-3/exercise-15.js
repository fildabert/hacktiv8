function groupAnimals(animals){
  animals.sort()
  var result = []
  var animalsGroup = []
  for(h = 0; animals.length !== 0; h++){
    if(animals[1] !== undefined && animals[0][0] == animals[1][0] && animals.length !== 0){
      for(i = 0; animals[i] !== undefined && animals[0][0] == animals [i][0] && animals.length !== 0; i++){
          animalsGroup.push(animals[i])    
        }
        result.push(animalsGroup)
        animalsGroup = []
        animals.splice(0, i)
      }
      else {
        result.push([animals[0]])
        animals.splice(0, 1)
      }
  }
  return result
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//   [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak', 'anjing', 'babi', 'beruang', 'bangau', 'burung']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]