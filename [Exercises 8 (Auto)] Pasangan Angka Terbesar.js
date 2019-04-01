function pasanganTerbesar(num) {
    num = String(num);
    num = num.split("");
    var pasanganTotal = [];
    for (var i = 0; i < num.length-1; i++){
        pasangan = num.slice(i, i+2).join("");
        pasangan = Number(pasangan);
        pasanganTotal.push(pasangan);
    }    
    return Math.max.apply(Math, pasanganTotal);
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99