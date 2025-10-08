/* --- TEMA CYBERPUNK --- */
:root {
    --bg-dark: #0d0221; /* Deep Space Blue/Purple */
    --bg-card: rgba(10, 10, 35, 0.5); /* Semi-transparent card */
    --text-light: #f0f0f0; /* Off-white text */
    --accent: #ff0054; /* Neon Magenta */
    --accent-secondary: #00f5d4; /* Neon Cyan */
    --shadow: rgba(255, 0, 84, 0.4); /* Magenta Shadow */
    --font-title: 'Orbitron', sans-serif;
    --font-body: 'Share Tech Mono', monospace;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-body);
    margin: 0;
    padding: 0;
    background-color: var(--bg-dark);
    color: var(--text-light);
    line-height: 1.7;
    /* Efek scanlines samar */
    background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 1px 3px;
}

h1, h2, h3 {
    font-family: var(--font-title);
    font-weight: 700;
    color: var(--accent-secondary);
}

.text-glow {
    text-shadow: 0 0 5px var(--accent-secondary), 0 0 10px var(--accent-secondary);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.section {
    padding: 100px 0;
}

.section-title {
    font-size: 2.5em;
    text-align: center;
    margin-bottom: 50px;
}

/* --- Header & Navigasi --- */
header {
    background: rgba(13, 2, 33, 0.8);
    backdrop-filter: blur(10px);
    padding: 20px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid var(--accent);
    box-shadow: 0 2px 10px var(--shadow);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo h1 {
    font-size: 1.5em;
    color: var(--text-light);
    margin: 0;
    text-shadow: 0 0 5px var(--accent);
}

nav { display: flex; }
nav a {
    text-decoration: none;
    color: var(--text-light);
    font-weight: 500;
    margin-left: 20px;
    transition: color 0.3s, text-shadow 0.3s;
    white-space: nowrap;
}
nav a:hover {
    color: var(--accent);
    text-shadow: 0 0 8px var(--accent);
}

/* --- Bagian Hero & Glitch Effect --- */
.hero-section { padding: 150px 0 100px; text-align: center; }
.hero-content { display: flex; flex-direction: column; }

.hero-text h1 {
    font-size: 4em;
    color: var(--text-light);
    margin-bottom: 20px;
}
.hero-text p {
    font-size: 1.2em;
    margin-bottom: 30px;
    opacity: 0.8;
}

.glitch {
    position: relative;
}
.glitch::before, .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--bg-dark);
    overflow: hidden;
}
.glitch::before {
    left: 2px;
    text-shadow: -2px 0 var(--accent);
    animation: glitch-anim-1 2s infinite linear alternate-reverse;
}
.glitch::after {
    left: -2px;
    text-shadow: -2px 0 var(--accent-secondary), 2px 2px var(--accent);
    animation: glitch-anim-2 2s infinite linear alternate-reverse;
}

@keyframes glitch-anim-1 { 0%, 100% { clip-path: inset(45% 0 50% 0); } 20% { clip-path: inset(10% 0 85% 0); } 40% { clip-path: inset(60% 0 30% 0); } 60% { clip-path: inset(30% 0 65% 0); } 80% { clip-path: inset(80% 0 5% 0); } }
@keyframes glitch-anim-2 { 0%, 100% { clip-path: inset(5% 0 90% 0); } 25% { clip-path: inset(50% 0 45% 0); } 50% { clip-path: inset(20% 0 75% 0); } 75% { clip-path: inset(90% 0 5% 0); } }

/* --- Tombol --- */
.cta-button, .download-cv-btn, .portfolio-btn, .project-btn, .certificate-link {
    background: transparent;
    border: 2px solid var(--accent);
    color: var(--accent);
    padding: 12px 25px;
    text-decoration: none;
    font-family: var(--font-title);
    font-weight: 600;
    transition: background-color 0.3s, box-shadow 0.3s, color 0.3s;
}
.cta-button:hover, .download-cv-btn:hover, .portfolio-btn:hover, .project-btn:hover, .certificate-link:hover {
    background-color: var(--accent);
    color: var(--bg-dark);
    box-shadow: 0 0 15px var(--accent);
}
.button-group { display: flex; gap: 15px; margin-top: 30px; }

/* --- Card & Konten --- */
.card {
    background: var(--bg-card);
    padding: 30px;
    border: 1px solid var(--accent-secondary);
    box-shadow: 0 0 15px rgba(0, 245, 212, 0.2);
    backdrop-filter: blur(5px);
    transition: transform 0.3s, box-shadow 0.3s;
    height: 100%;
}
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 25px rgba(0, 245, 212, 0.4);
}

.about-flex-container { display: flex; align-items: center; gap: 50px; margin-bottom: 80px; flex-wrap: wrap; }
.about-text-content { flex: 1; min-width: 300px; }
.about-description { line-height: 1.8; opacity: 0.8; }
.about-image { flex-shrink: 0; text-align: center; }
.about-image img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border: 2px solid var(--accent);
    box-shadow: 0 0 20px var(--shadow);
}

.about-content-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 50px; }
.hobby-list i, .education-list i, .skill-title-group i { color: var(--accent); font-size: 1.8em; }
.hobby-list ul, .education-list ul { list-style: none; padding: 0; }
.hobby-list li, .education-list li { display: flex; align-items: center; gap: 15px; padding: 10px 0; }

/* --- Keahlian --- */
.skills-grid-container { padding-top: 80px; }
.skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; }
.skill-header { display: flex; align-items: center; justify-content: space-between; }
.skill-bar-container { height: 8px; background-color: rgba(0, 245, 212, 0.1); border-radius: 4px; overflow: hidden; margin-top: 5px; border: 1px solid var(--accent-secondary); }
