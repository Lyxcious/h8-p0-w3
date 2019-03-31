function targetTerdekat(arr) {
    var b= String(arr)
    var oTotal = b.match(/o/g).length;
    var jarak = [];
    if (arr.indexOf("x") >= 0){
        for (var j = 0; j < oTotal; j++){
            if (j == 0){
                var i = arr.indexOf("o");
            } else {
                i = arr.indexOf("o", i+1);
            }
            var xTotal = b.match(/x/g).length;
            for (var k = 0; k < xTotal; k++){
                if (k == 0){
                    var l = arr.indexOf("x");
                } else {
                    l = arr.indexOf("x", l+1);
                }
            bedaJarak = Math.abs(i-l);
            jarak.push(bedaJarak);
        }
    }
    jarakTerdekat = Math.min.apply(Math, jarak);
    return jarakTerdekat;
    } else {
        return 0;
    }
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2