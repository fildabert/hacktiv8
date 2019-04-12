function highestScore (students) {
    var result = { }
    for(i = 0; i < students.length; i++){
        if(result[students[i].class] === undefined){
            result[students[i].class] = {
                name: students[i].name,
                score: students[i].score
            }
        }
        if(result[students[i].class].score < students[i].score){
            result[students[i].class].name = students[i].name
            result[students[i].class].score = students[i].score
        }
    }
    return result
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }