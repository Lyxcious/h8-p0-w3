var words = "hello world!";
var wordBreak = "";
for (var i = words.length-1; i >= 0; i--){
    wordBreak = wordBreak + words[i];
}
console.log(wordBreak);