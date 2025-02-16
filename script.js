
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('myNavbar');
    if (window.scrollY > 400) { // Ganti 100 dengan nilai yang sesuai
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Tambahkan event listener untuk setiap thumbnail
const thumbnails = document.querySelectorAll('.thumbnail');
const modalImage = document.getElementById('modalImage');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        modalImage.src = thumbnail.dataset.full;
        $('#imageModal').modal('show'); // Gunakan jQuery untuk menampilkan modal
    });
});

// Tambahkan variabel untuk skala gambar saat ini
let currentScale = 1;

// Tambahkan event listener untuk klik pada gambar di dalam modal
modalImage.addEventListener('click', () => {
    // Toggle zoom in dan zoom out
    if (currentScale === 1) {
        currentScale = 1.5; // Zoom in
        modalImage.style.cursor = 'zoom-out'; // Ubah cursor menjadi zoom out
    } else {
        currentScale = 1; // Zoom out
        modalImage.style.cursor = 'zoom-in'; // Ubah cursor menjadi zoom in
    }

    // Terapkan skala pada gambar
    modalImage.style.transform = `scale(${currentScale})`;
});

