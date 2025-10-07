document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk animasi fade-in saat menggulir
    const animateSections = () => {
        const sections = document.querySelectorAll('.animate');
        const windowHeight = window.innerHeight;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            // Animasi dimulai saat 80% dari bagian terlihat (0.8)
            if (sectionTop < windowHeight * 0.8) {
                section.classList.add('animated');
                // Panggil fungsi animasi bar saat bagian skills terlihat
                if (section.id === 'about') {
                    animateSkillBars();
                }
            }
        });
    };

    // Fungsi untuk menganimasikan progress bar
    const animateSkillBars = () => {
        const skillBars = document.querySelectorAll('.bar-fill');
        skillBars.forEach(bar => {
            // Ambil lebar yang sudah ditentukan di HTML
            const width = bar.style.width; 
            // Atur ulang width menjadi 0, lalu atur ke nilai aslinya setelah sedikit delay
            bar.style.width = '0';
            // Gunakan setTimeout untuk memicu transisi CSS setelah browser merender
            setTimeout(() => {
                bar.style.width = width;
            }, 100); 
        });
    };

    // Panggil fungsi saat halaman dimuat dan saat menggulir
    window.addEventListener('load', animateSections);
    window.addEventListener('scroll', animateSections);
    
    // Panggil animateSections secara manual saat DOMContentLoaded selesai untuk mengecek elemen yang sudah terlihat
    animateSections(); 
});
