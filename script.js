document.addEventListener('DOMContentLoaded', () => {
    
    // Fungsi untuk menganimasikan progress bar
    const animateSkillBars = () => {
        const skillBars = document.querySelectorAll('.bar-fill');
        skillBars.forEach(bar => {
            const currentWidth = bar.style.width;
            
            // Set ke nol untuk inisialisasi transisi
            bar.style.width = '0'; 
            
            // Gunakan setTimeout untuk memicu transisi CSS setelah browser merender
            setTimeout(() => {
                // Terapkan width asli yang ada di HTML (misal '80%')
                bar.style.width = currentWidth; 
            }, 100); 
        });
    };

    // Fungsi untuk animasi fade-in saat menggulir
    const animateSections = () => {
        const sections = document.querySelectorAll('.animate');
        const windowHeight = window.innerHeight;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < windowHeight * 0.8) {
                section.classList.add('animated');
                // Panggil fungsi animasi bar saat bagian skills terlihat
                if (section.id === 'about') {
                    animateSkillBars();
                }
            }
        });
    };

    // Panggil fungsi saat halaman dimuat dan saat menggulir
    window.addEventListener('load', animateSections);
    window.addEventListener('scroll', animateSections);
    
    // Panggil animateSections secara manual saat DOMContentLoaded selesai
    animateSections(); 
});
