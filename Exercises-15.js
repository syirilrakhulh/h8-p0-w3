function groupAnimals(animals) {
    // you can only write your code here!
  
  var semuaHewan = []
  var abjad = []
  animals.reverse().sort();

  for(i=0;i<animals.length;i++){
    abjad.push(animals[i])
    if(animals[i + 1] !== undefined){
      if(animals[i][0] !== animals[i+1][0]){
        semuaHewan.push(abjad)
        abjad=[]
      }
    }
  }
  semuaHewan.push(abjad)
  return semuaHewan
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]