function test(){
    var count = 0
    var countWhiteList = 0
    var terlarang = ["%", "^", "&"];
    var str = "Halo %sa^ya%%budi&&";

    for (var i = 0; i < str.length; i++){
        var found = false;
        for (var j = 0; j < terlarang.length; j++){
            if(str[i] === terlarang[j]){
                count++;
                found = true;
            }
        }
        if (!found){
            countWhiteList++;
        }
    }
    console.log(countWhiteList)
}

test()