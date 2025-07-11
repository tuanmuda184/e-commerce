// Fungsi untuk menampilkan modal
function showModal(title, price) {
    document.getElementById('modal-title').innerText = title; // Mengatur judul modal
    document.getElementById('modal-price').innerText = price; // Mengatur harga produk
    document.getElementById('modal').style.display = "block"; // Menampilkan modal
}

// Fungsi untuk menutup modal
function closeModal() {
    document.getElementById('modal').style.display = "none"; // Menyembunyikan modal
}

// Menutup modal ketika mengklik di luar modal
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none"; // Menyembunyikan modal\
    }
}

function showModal(namaProduk, hargaProduk) {
    alert("Produk: " + namaProduk + "\nHarga: " + hargaProduk);
}
