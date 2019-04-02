/* 
==================
Alphabet Iteration
==================

[INSTRUCTION]
Buatlah sebuah program yang dapat membuat urutan alphabet yang berulang 
sebanyak n * n. dimana n adalah input(parameter) yaitu : 
- n sebagai banyaknya string yang di display 
- dan n sebagai banyaknya character dalam 1 string tersebut 

[EXAMPLE]

alphabetIteration(5)

maka output nya : 

ABCDE <-- 1 string yg di display memiliki 5 char 
FGHIJ <-- string selanjutnya merupakan character lanjutan 
KLMNO
PQRST
UVWXY

perhatikan, string yang di display sebanyak 5 baris 

tapi apabila yang di display melebihi jumlah alphabet yang ada 
maka alphabetnya di ulang lagi dari awal 

alphabetIteration(6)

ABCDEF
GHIJKL
MNOPQR
STUVWX
YZABCD <-- perhatikan alphabetnya diulang dari awal di baris ini 
EFGHIJ 

[RULES]
- dilarang menggunakan syntax ES 6

*/

function alphabetIteration(n) {
  var baris = "";
  a = 65;
  for (var i = 0; i < n; i++){
    for (var j = 0; j < n; j++){
      if (a > 90) {
        a = 65;
        baris = baris + String.fromCharCode(a);   
        a++;   
      } else {
        baris = baris + String.fromCharCode(a);
        a++;
      }
    } 
    baris = baris + "\n";
  }
  console.log(baris);
}

alphabetIteration(5)
/*
  ABCDE
  FGHIJ 
  KLMNO
  PQRST
  UVWXY
*/

alphabetIteration(6)
/*
  ABCDEF
  GHIJKL
  MNOPQR
  STUVWX
  YZABCD
  EFGHIJ 
*/
