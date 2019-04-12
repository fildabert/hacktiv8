var pokemonList2 = [
  {
    name: 'Beedrill',
    status: { attack: 72, hp: 73, defense: 75 },
    type: 'Flying'
  },
  {
    name: 'Gliscor',
    status: { attack: 99, hp: 95, defense: 85 },
    type: 'Flying'
  },
  {
    name: 'Caterpie',
    status: { attack: 30, hp: 45, defense: 55 },
    type: 'Bug'
  }
]

function gottaGroupEmAll(list) {
    var result = {}
    for(i = 0; i < list.length; i++){
        if(result[list[i].type] === undefined){
            result[list[i].type] = {
                type: list[i].type,
                pokemonList: [],
                highestAttack: {name: "", attack: 0},
                bestStatus: {name: "", overallStat: 0}
            }
        }
        result[list[i].type].pokemonList.push(list[i].name)
        if(result[list[i].type].highestAttack.attack < list[i].status.attack){
            result[list[i].type].highestAttack.name = list[i].name
            result[list[i].type].highestAttack.attack = list[i].status.attack
        }
        if(result[list[i].type].bestStatus.overallStat < list[i].status.attack + list[i].status.hp + list[i].status.defense){
            result[list[i].type].bestStatus.name = list[i].name
            result[list[i].type].bestStatus.overallStat = list[i].status.attack + list[i].status.hp + list[i].status.defense
        }

        // if(result[i].type == list[i].type){
        //     result[0].pokemonList.push(list[i].name)
        //     if(result[0].highestAttack.attack < list[i].status.attack){
        //         result[0].highestAttack.name = list[i].name
        //         result[0].highestAttack.attack = list[i].status.attack
        //     }
        //     if(result[0].bestStatus.overallStat < list[i].status.attack + list[i].status.hp + list[i].status.defense){
        //         result[0].bestStatus.name = list[i].name
        //         result[0].bestStatus.overallStat = list[i].status.attack + list[i].status.hp + list[i].status.defense
        //     }
        // }
        // else{
        //     result.push(
        //         {
        //             type: list[i].type,
        //             pokemonList: [],
        //             highestAttack: {name: "", attack: 0},
        //             bestStatus: {name: "", overallStat: 0}
        //         }
        //     )
        //     result[1].pokemonList.push(list[i].name)
        //     if(result[1].highestAttack.attack < list[i].status.attack){
        //         result[1].highestAttack.name = list[i].name
        //         result[1].highestAttack.attack = list[i].status.attack
        //     }
        //     if(result[1].bestStatus.overallStat < list[i].status.attack + list[i].status.hp + list[i].status.defense){
        //         result[1].bestStatus.name = list[i].name
        //         result[1].bestStatus.overallStat = list[i].status.attack + list[i].status.hp + list[i].status.defense
        //     }
        // }
    }

    var kunci = Object.keys(result);
    var newResult = [];
    for(var i =0; i< kunci.length;i++){
        newResult.push(result[kunci[i]]);
    }
  return newResult;
}
console.log(gottaGroupEmAll(pokemonList2))

// //output: 
// // [{
// //   type: 'Flying',
// //   pokemonList: ['Beedrill', 'Gliscor'],
// //   highestAttack: { name: 'Beedrill', attack: 72 },
// //   bestStatus: { name: 'Gliscor', overallStat: 250 } //overall stat di dapat dari menjumlahkan attack hp dan defense pokemon
// // },
// // {
// //   type: 'Bug',
// //   pokemonList: ['Caterpie'],
// //   highestAttack: { name: 'Caterpie', attack: 30 },
// //   bestStatus: { name: 'Caterpie', overallStat: 130 }
// // }]