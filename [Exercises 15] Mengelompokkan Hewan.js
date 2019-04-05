function groupAnimals(animals) {
    animals.sort()
    j = 0;
    kelompok = [[]];
    kelompok[j].push(animals[0]);
    for (var i = 1; i<animals.length; i++){
            if (kelompok[j][0][0] == animals[i][0]){
                kelompok[j].push(animals[i]);
            } else if (kelompok[j][0][0] !== animals[i][0]){
                j++;
                kelompok.push([animals[i]]);
          }
    }
    return kelompok
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

