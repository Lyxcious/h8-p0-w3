/*
[INSTRUCTION]
Buatlah Algoritma/Pseudocode untuk kasus berikut !

Seorang polisi sedang melakukan razia kepada pengendara sepeda motor di jalan raya. Untuk setiap pengendara akan di cek kelengkapan berupa : 
- Menggunakan helm atau tidak
- Membawa STNK atau tidak
- Membawa SIM atau tidak
- Apakah tanggal PLAT NOMOR masih berlaku atau tidak
untuk setiap aturan yang dilanggar maka pengendara harus membayar tilang sebesar 500 ribu rupiah.

Tampilkan biaya denda pengendara sesuai dengan pelanggaran yang dilakukan

write your Pseudocode / alogorithm here

*/
STORE "denda" with value 0;

ASK "Pengendara menggunakan helm? true/false";
SET "helm" with value true or false;
IF "helm" is false
    ADD "denda" by 1;
END IF

ASK "Pengendara membawa STNK? true/false";
SET "STNK" with value true or false;
IF "STNK" is false
    ADD "denda" by 1;
END IF

ASK "Pengendara membawa SIM? true/false";
SET "SIM" with value true or false;
IF "SIM" is false
    ADD "denda" by 1;
END IF

ASK "Plat nomor masih berlaku? true/false";
SET "plat" with value true or false;
IF "plat" is false
    ADD "denda" by 1;
END IF

CALCULATE "denda" multiply by 500000;
DISPLAY "Denda yang harus anda bayarkan adalah " plus "denda" plus " rupiah"