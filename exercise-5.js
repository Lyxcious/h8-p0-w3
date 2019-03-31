function palindrome(kata) {
    var kataR = kata.split("").reverse().join("");
    if (kataR === kata){
        return true;
    } else {
        return false;
    }
}
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false