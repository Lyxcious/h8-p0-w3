function groupAnimals(animals) {
    huruf = "abcdefghijklmnopqrstuvwxyz";
    tampungHuruf = [];
    tampungHewan = [];
    for (var i = 0; i < animals.length; i++){
        for (var j = 0; j <= tampungHuruf.length; j++){
            if (animals[i][0] !== tampungHuruf[j]){
                tampungHuruf[huruf.indexOf(animals[i][0])] = animals[i][0];
            }
        }
    }
    tampungHuruf = tampungHuruf.filter(function(el) {return el;})
    for (var i = 0; i < tampungHuruf.length; i++){
        tampungHewan.push([])
    }
    for (var i = 0; i < animals.length; i++){
        for (var j = 0; j < tampungHuruf.length; j++){
            if (animals[i][0] === tampungHuruf[j]){
                tampungHewan[j].push(animals[i]);
            }
        }
    }
    return tampungHewan
  }
  
//   // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//   // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
//   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
//   // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

// a = [];
// a[0]= "a";
// a[3]= "b";
// console.log(a)
// a1 = a.filter(function(el) {return el;})
// console.log(a1)

