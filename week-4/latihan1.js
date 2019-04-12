var characters =
  [
    { id: 720, name: 'Liebert, Anna', role: 'Main', anime: 'Monster' },
    { id: 721, name: 'Liebert, Johan', role: 'Main', anime: 'Monster' },
    { id: 722, name: 'Tenma, Kenzou', role: 'Main', anime: 'Monster' },
    { id: 723, name: 'Bernhardt, Hugo', role: 'Supporting', anime: 'Monster' },
    { id: 724, name: 'Elric, Edward', role: 'Main', anime: 'FMA' },
    { id: 725, name: 'Elric, Alphonse', role: 'Main', anime: 'FMA' },
    { id: 726, name: 'Wanijima, Agito', role: 'Main', anime: 'Air gear' }
  ]
//output 
// 
//   {
//     Role: {
//       Main: ['Anna Liebert', 'Johan Liebert', 'Kenzou Tenma', 'Edward Elric', 'Alphonse Elric'],
//       Supporting: ['Hugo Bernhardt', 'Agito Wanijima']
//     },
//     Title: {
//       Monster: [
//         { id: 720, name: 'Liebert, Anna' },
//         { id: 721, name: 'Liebert, Johan' },
//         { id: 722, name: 'Tenma, Kenzou' },
//         { id: 723, name: 'Bernhardt, Hugo' }
//       ],
//       FMA: [
//         { id: 724, name: 'Elric, Edward' },
//         { id: 725, name: 'Elric, Alphonse' },
//       ],
//       "Air Gear": [
//         { id: 726, name: 'Wanijima, Agito' }
//       ]
//     }
//   }
function animeReport(arr){
    var result = {
        Role: {},
        Title: {}
    }
    for(i = 0; i < characters.length; i++){
        var nameArr = characters[i].name.split(",")
        var fullName= ""
        for(j = nameArr.length-1; j >= 0; j--){
            fullName += nameArr[j] + " "
        }

        if(result.Role[characters[i].role] == undefined){
            result.Role[characters[i].role] = []
        }
        result.Role[characters[i].role].push(
            fullName
        )
        if(result.Title[characters[i].anime] == undefined){
            result.Title[characters[i].anime] = []
        }
        // console.log(characters[i].id, characters[i].name)
        result.Title[characters[i].anime].push(
            {
                id: characters[i].id,
                name: characters[i].name
            }
        )
    }
    return JSON.stringify(result, null, 2);
}
console.log(animeReport(characters))