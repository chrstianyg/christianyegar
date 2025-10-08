document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Fungsi untuk membuka/menutup menu
    const toggleMenu = () => {
        navMenu.classList.toggle('nav-active');

        // Ganti ikon hamburger menjadi 'X' saat menu aktif
        const icon = hamburgerBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    };

    // Event listener untuk tombol hamburger
    hamburgerBtn.addEventListener('click', toggleMenu);

    // Event listener untuk setiap link di menu
    // Agar menu tertutup saat salah satu link diklik
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('nav-active')) {
                toggleMenu();
            }
        });
    });
});
