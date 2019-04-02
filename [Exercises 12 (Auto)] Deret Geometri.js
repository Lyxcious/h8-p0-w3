function tentukanDeretGeometri(arr) {
    function testGeo(bedaFaktor, faktorKaliAwal, faktorKali){
        bedaFaktor = faktorKaliAwal - faktorKali;
        if (bedaFaktor === 0){
            return true;
        } else {
            return false;
        }
    }
    
    var i = 0;
    var bedaFaktor = 0;
    var faktorKaliAwal = 0;
    var faktorKali = 0;
    while (testGeo(bedaFaktor, faktorKaliAwal, faktorKali) === true && i < arr.length-1){
        faktorKali = arr[i+1]/arr[i];
        if (i === 0){
            faktorKaliAwal = faktorKali;
        } else {
            bedaFaktor = faktorKaliAwal - faktorKali;
        }
        i++;
    }
    return testGeo(bedaFaktor, faktorKaliAwal, faktorKali);
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false