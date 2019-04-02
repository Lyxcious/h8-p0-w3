function targetTerdekat(arr) {
    var b= String(arr);
    var oTotal = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == "o"){
            oTotal++;
        }
    }
    var jarak = [];
    var bedaJarak;
    if (arr.indexOf("x") >= 0){
        for (var j = 0; j < oTotal; j++){
            if (j === 0){
                var n = arr.indexOf("o");
            } else {
                n = arr.indexOf("o", n+1);
            }
            var xTotal = 0;
                for (var k = 0; k < arr.length; k++){
                    if (arr[k] == "x"){
                    xTotal++;
                    }
                }
            for (var m = 0; m < xTotal; m++){
                if (m === 0){
                    var l = arr.indexOf("x");
                } else {
                    l = arr.indexOf("x", l+1);
                }
            bedaJarak = Math.abs(n-l);
            jarak.push(bedaJarak);
            }
        }
    var jarakTerdekat = Math.min.apply(Math, jarak);
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