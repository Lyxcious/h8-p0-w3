function angkaPalindrome(num) {
    function testPalindrome () {
        num = String(num)
        var numR = num.split("").reverse().join("");
        if (numR == num){
            return true;
        } else {
            return false;
        }
    }
    if (testPalindrome() === true) {
        num = Number(num) + 1;
        while (testPalindrome() == false){
            num = Number(num) + 1;
        }
    } else {
        while (testPalindrome() == false){
            num = Number(num) + 1;
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
  