/*
==================
FIND AND COUNT
==================

[INSTRUCTION]
Terdapat function find and replace, function ini menerima 2 parameter berupa string, function ini akan mengembalikan jumlah kemunculan parameter kedua di parameter pertama

[EXAMPLES]
input : 
parameter 1 = 'Menari dan bernyanyi'
parameter 2 = 'a'
proses : mencari jumlah kemunculan a di dalam parameter 1
output : 'Terdapat 3 huruf a'

Panjang parameter kedua wajib hanya 1 karakter
input : 
parameter 1 = 'Dilarang merokok disini'
parameter 2 = 'cd'
output : 'Invalid input parameter !'

*/

function findAndReplace(str, character) {
  var count = 0;
  if (character.length !== 1){
    return 'Invalid input parameter !'
  } else {
    for (var i = 0; i <= str.length-1; i++){
      if (character == str.charAt(i)){
        count++;
      }
    }
    return "Terdapat " + count + " huruf " + character;
  }
}

console.log(findAndReplace('Menari dan bernyanyi', 'a'))
// 'Terdapat 3 huruf a'
console.log(findAndReplace('Berdansa bersama', 'm'))
// 'Terdapat 1 huruf m'
console.log(findAndReplace('Menari dan bernyanyi', ''))
// 'Invalid input parameter !'
console.log(findAndReplace('Dilarang merokok disini', 'cd'))
//'Invalid input parameter !'

