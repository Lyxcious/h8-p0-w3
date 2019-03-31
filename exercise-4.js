var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input);

    var tanggalan = input[3];
    tanggalan = tanggalan.split("");
    var bulan = tanggalan.slice(3,5).join("");
    switch (bulan){
        case "01":
            namaBulan = "Januari";
            break;
        case "02":
            namaBulan = "Februari";
            break;
        case "03":
            namaBulan = "Maret";
            break;
        case "04":
            namaBulan = "April";
            break;
        case "05":
            namaBulan = "Mei";
            break;
        case "06":
            namaBulan = "Juni";
            break;
        case "07":
            namaBulan = "Juli";
            break;
        case "08":
            namaBulan = "Agustus";
            break;
        case "09":
            namaBulan = "September";
            break;
        case "10":
            namaBulan = "Oktober";
            break;
        case "11":
            namaBulan = "November";
            break;
        case "12":
            namaBulan = "Desember";
            break;
    }
    console.log(namaBulan);

    var tanggal = tanggalan.slice(0,2).join("");
    var tahun = tanggalan.slice(6,10).join("");
    tanggal = Number(tanggal);
    bulan = Number(bulan);
    tahun = Number(tahun);
    var tanggalanSort = [tanggal, bulan, tahun];
    tanggalanSort.sort(function(value1, value2) { return value1 < value2 });
    console.log(tanggalanSort);

    tanggalan.splice(2, 1, "-");
    tanggalan.splice(5, 1, "-")
    tanggalan = tanggalan.join("");
    console.log(tanggalan);

    var nama = input[1].slice(0,15);
    console.log(nama);
}

dataHandling2(input);