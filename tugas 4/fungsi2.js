// Fungsi untuk membuat bangun dari teks
function buatBangun(JumlahBaris) {
    let hasil = '';
    for (let i = JumlahBaris; i > 0; i--) {
        for (let j = 0; j < i * 2 - 1; j++) {
            hasil += '*';
        }
        hasil += '\n';
    }
    return hasil;
}

// Minta input dari pengguna
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Masukkan jumlah baris: ", jumlahBaris => {
    // Validasi input
    if (isNaN(jumlahBaris) || jumlahBaris < 1) {
        console.log("Masukkan jumlah baris yang valid (bilangan bulat positif).");
        readline.close();
        return;
    }

    // Konversi input menjadi bilangan bulat
    jumlahBaris = parseInt(jumlahBaris);

    // Tampilkan hasil
    console.log("Hasil:");
    console.log(buatBangun(jumlahBaris));

    readline.close();
});
