// Fungsi untuk membuat dan mengelompokkan bilangan genap
function kelompokkanBilanganGenap(JumlahBilangan, JumlahKelompok) {
    let bilanganGenap = [];
    let angka = 2; // Mulai dari angka 2
    for (let i = 0; i < JumlahBilangan; i++) {
        bilanganGenap.push(angka);
        angka += 2; // Naik 2 setiap iterasi untuk mendapatkan bilangan genap berikutnya
    }

    let hasil = [];
    let kelompok = Math.floor(JumlahBilangan / JumlahKelompok); // Hitung berapa bilangan per kelompok
    let sisa = JumlahBilangan - (kelompok * JumlahKelompok); // Hitung sisa bilangan yang tidak cukup untuk satu kelompok
    let index = 0;
    for (let i = 0; i < JumlahKelompok; i++) {
        let jumlahBilanganPerKelompok = kelompok; // Jumlah bilangan per kelompok awalnya sama
        if (sisa > 0) {
            jumlahBilanganPerKelompok++; // Tambah 1 bilangan jika masih ada sisa
            sisa--; // Kurangi sisa
        }
        hasil.push(bilanganGenap.slice(index, index + jumlahBilanganPerKelompok));
        index += jumlahBilanganPerKelompok;
    }

    return hasil;
}

// Minta input dari pengguna
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Masukkan jumlah bilangan genap: ", jumlahBilangan => {
    readline.question("Masukkan jumlah kelompok: ", jumlahKelompok => {
        // Validasi input
        if (isNaN(jumlahBilangan) || isNaN(jumlahKelompok) || jumlahBilangan < 1 || jumlahKelompok < 1) {
            console.log("Masukkan jumlah bilangan genap dan jumlah kelompok yang valid (bilangan bulat positif).");
            readline.close();
            return;
        }

        // Konversi input menjadi bilangan bulat
        jumlahBilangan = parseInt(jumlahBilangan);
        jumlahKelompok = parseInt(jumlahKelompok);

        // Tampilkan hasil
        console.log("Hasil:");
        console.log(kelompokkanBilanganGenap(jumlahBilangan, jumlahKelompok));

        readline.close();
    });
});
