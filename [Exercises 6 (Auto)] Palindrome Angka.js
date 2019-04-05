function angkaPalindrome(num) {
    function testPalindrome () {
        num = String(num)
        var numR = num.split("").reverse().join("");
        numR = Number(numR);
        num = Number(num);
        if (numR === num){
            return true;
        } else {
            return false;
        }
    }
    if (testPalindrome() === true) {
        num = num + 1;
        while (testPalindrome() === false){
            num = num + 1;
        }
    } else {
        while (testPalindrome() === false){
            num = num + 1;
        }
    }
    return num;
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  