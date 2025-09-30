document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Mencegah form dari refresh halaman

        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        // Validasi sederhana
        if (name === '' || email === '' || message === '') {
            alert('Mohon lengkapi semua field!');
            return;
        }

        // Di sini Anda bisa menambahkan logika untuk mengirim email,
        // misalnya menggunakan layanan seperti Formspree.io atau EmailJS.
        // Untuk saat ini, kita akan menampilkan notifikasi sukses.

        alert('Terima kasih, pesan Anda sudah terkirim!');
        
        // Bersihkan formulir setelah pengiriman
        contactForm.reset();
    });
});