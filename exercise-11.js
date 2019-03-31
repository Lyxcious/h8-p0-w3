function tentukanDeretAritmatika(arr) {
    function testSelisih(bedaSelisih, bedaSelisihAwal, selisih){
        bedaSelisih = bedaSelisihAwal - selisih;
        if (bedaSelisih == 0){
            return true;
        } else {
            return false;
        }
    }
    
    var i = 0;
    bedaSelisih = 0;
    bedaSelisihAwal = 0;
    selisih = 0;
    while (testSelisih(bedaSelisih, bedaSelisihAwal, selisih) == true && i < arr.length-1){
        selisih = Math.abs(arr[i]-arr[i+1]);
        if (i == 0){
            bedaSelisihAwal = selisih;
        } else {
            bedaSelisih = bedaSelisihAwal - selisih;
        }
        i++;
    }
    return testSelisih(bedaSelisih, bedaSelisihAwal, selisih);  
}
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false*/
