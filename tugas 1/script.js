document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    // Loop melalui setiap elemen navigasi
    navLinks.forEach(link => {
        // Tambahkan event listener untuk setiap elemen navigasi
        link.addEventListener('click', function () {
            // Hapus kelas 'active' dari semua elemen navigasi
            navLinks.forEach(link => {
                link.classList.remove('active');
                link.style.color = 'white'; // Reset warna teks menjadi putih
            });
            // Tambahkan kelas 'active' ke elemen yang di-klik
            this.classList.add('active');
            this.style.color = 'green'; // Ubah warna teks elemen yang di-klik menjadi hijau
        });
    });

    // Setel elemen navigasi "Home" menjadi aktif saat halaman dimuat
    const homeLink = document.querySelector('.nav-link[href="#"]');
    homeLink.classList.add('active');
    homeLink.style.color = 'green';
});

$(document).ready(function () {
    $(".wish-icon i").click(function () {
        $(this).toggleClass("fa-heart fa-heart-o");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const productButtons = document.querySelectorAll('.product-section .btn');

    productButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Menghapus class outline dari semua tombol
            productButtons.forEach(btn => {
                btn.classList.remove('btn-outline-success');
            });

            // Menambahkan class outline hanya pada tombol yang diklik
            this.classList.add('btn-outline-success');
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let currentContentIndex = 1;
    const totalContents = 2; // Jumlah total konten yang tersedia

    const prevButton = document.getElementById("prevBtn");
    const nextButton = document.getElementById("nextBtn");

    function showContent(index) {
        const contents = document.querySelectorAll('.other-content .content');
        contents.forEach(content => {
            content.style.display = 'none';
        });

        const currentContent = document.getElementById('content' + index);
        currentContent.style.display = 'block';
    }

    prevButton.addEventListener('click', function () {
        if (currentContentIndex > 1) {
            currentContentIndex--;
            showContent(currentContentIndex);
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentContentIndex < totalContents) {
            currentContentIndex++;
            showContent(currentContentIndex);
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".carousel-item .card");

    cards.forEach(card => {
        const stars = card.querySelectorAll(".star-rating i");

        stars.forEach(star => {
            star.addEventListener("click", function () {
                const rating = parseInt(this.getAttribute("data-rating"));

                stars.forEach(s => {
                    if (parseInt(s.getAttribute("data-rating")) <= rating) {
                        s.classList.add("selected");
                    } else {
                        s.classList.remove("selected");
                    }
                });
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const content1Stars = document.querySelectorAll("#content1 .star-rating i");

    content1Stars.forEach(star => {
        star.addEventListener("click", function () {
            const rating = parseInt(this.getAttribute("data-rating"));
            content1Stars.forEach(s => {
                if (parseInt(s.getAttribute("data-rating")) <= rating) {
                    s.classList.add("selected");
                } else {
                    s.classList.remove("selected");
                }
            });
        });
    });
});
