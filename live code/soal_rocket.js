/*
    =====================
    word spread reduction
    =====================

    [INSTRUCTION]
    buatlah program yang dapat melakukan penyebaran ( spread )
    dimulai dari 1 char dalam suatu kata, lalu dapat menyusut lagi
    menjadi 1 char 

    [EXAMPLE]

    wordSpreadReduction("Dimas")
    output: 
    D
    Di
    Dim
    Dima
    Dimas
    Dima
    Dim
    Di
    D

    [RULES]
    - Dilarang menggunakan rekursif



*/

function wordSpreadReduction(str) {
    for (var i = 1; i <= str.length+(str.length-1); i++){
        var huruf = ""
        if (i < (str.length+(str.length-1))/2+1){
            for (var j = 0; j < i; j++){
                huruf = huruf + str[j]
            }
        } else {
            k = 0;
            huruf = ""
            for (var j = str.length+(str.length); j > i; j--){
                huruf = huruf + str[k];
                k++;
            }
        }
        console.log(huruf)
    }
}

wordSpreadReduction("Dimas")
/*
    D
    Di
    Dim
    Dima
    Dimas
    Dima
    Dim
    Di
    D
*/

wordSpreadReduction("Wika")
/*
W
Wi
Wik
Wika
Wik
Wi
W
*/
