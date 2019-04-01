var input = [["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]]

for (var i = 0; i < input.length;  i++){
    var data = "";
    for (var j = 0; j < input[i].length; j++){
        if (j == 3) {
            data = data + " " + input [i][j];
        } else {
            data = input [i][j];
        }
        if (i == input.length-1){
            switch (j){
                case 0:
                    console.log("Nomor ID:", data);
                    break;
                case 1:
                    console.log("Nama Lengkap:", data);
                    break;
                case 2:
                    break;
                case 3:
                    console.log("TTL:", data);
                    break;
                case 4:
                    console.log("Hobi:", data);
                    break;
            }
        } else {
            switch (j){
                case 0:
                    console.log("Nomor ID:", data);
                    break;
                case 1:
                    console.log("Nama Lengkap:", data);
                    break;
                case 2:
                    break;
                case 3:
                    console.log("TTL:", data);
                    break;
                case 4:
                    console.log("Hobi:", data, "\n");
                    break;
            }
        }
    } 
}