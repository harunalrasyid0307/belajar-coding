console.log("Hello World!")
function cekGenapGanjil(angka) {
    if (angka % 2 === 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}

// Contoh penggunaan:
console.log(cekGenapGanjil(5));  // Output: "Genap"
console.log(cekGenapGanjil(3));  // Output: "Ganjil"

function hitungTotal(harga, jumlah) {
    console.log("Input:", { harga, jumlah });
    
    const total = harga * jumlah;
    console.log("Total:", total);
    
    if (total > 1000000) {
        console.warn("Transaksi besar terdeteksi");
    }
    
    return total;
}