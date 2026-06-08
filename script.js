document.addEventListener('DOMContentLoaded', () => {
    
    // Siber Daktilo (Typewriter) Efekti
    const typeText = "İmalat Yürütme Sistemleri Adayı | Yazılım & Otomasyon | FOT-M Kurucusu";
    const typeElem = document.getElementById('typewriter');
    let i = 0;
    
    function typeWriter() {
        if (i < typeText.length) {
            typeElem.innerHTML += typeText.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Yazma hızı (ms)
        }
    }
    // Efekti başlatmak için küçük bir gecikme
    setTimeout(typeWriter, 1000);

    // Çeviri Sözlüğü (Deneyim ve Topluluk Linki eklendi)
    const translations = {
        tr: {
            nav_home: "Anasayfa",
            nav_about: "Hakkımda",
            nav_experience: "Deneyim",
            nav_skills: "Yetkinlikler",
            nav_works: "Çalışmalarım",
            nav_contact: "İletişim",
            hero_name: "Muhammed Arda Sarı",
            btn_cv: "_CV İndir",
            btn_contact: "_Sisteme Bağlan (İletişim)",
            about_title: "Hakkımda",
            about_text: `İmalat Yürütme Sistemleri alanında, saha operasyonları ve IT entegrasyonu konusunda uzmanlaşan bir adayım. Mekanik bakım deneyimimi <strong>SQL ve Python</strong> ile veri analizine dönüştürüyor; kestirimci bakım ve SCADA süreçleriyle üretim kayıplarını minimize etmeyi hedefliyorum. Aynı zamanda Türkiye'de bir ilk olan <a href="https://uretimingelecegi.vercel.app/" target="_blank" class="cyber-link">Üretimin Geleceği Topluluğu'nun (FOT-M)</a> kurucusu olarak, sektörel yeniliklere liderlik etme vizyonuna sahibim.`,
            exp_title: "Deneyim",
            exp_1_title: "Kadifeteks | Stajyer (Bilgi Teknolojileri)",
            exp_1_date: "Şubat 2026 - Haziran 2026",
            exp_1_desc: "İmalat Yürütme Sistemleri (MES) üzerinden üretim verilerinin anlık takibi. Endüstriyel el terminallerinin ağ sorunlarının çözümü ve PLC sistem mimarisinin saha uygulamaları.",
            exp_2_title: "Plastsonik Makina | Stajyer",
            exp_2_date: "Ağustos 2025 - Eylül 2025",
            exp_2_desc: "HF makinelerin mekanik montajı, elektrik pano kablolaması. Saha makinelerinin periyodik bakımı, sensör testleri ve devreye alma işlemleri.",
            skills_title: "Sistem Yetkinlikleri",
            topic_1: "Python, Java, C, SQL",
            topic_2: "Kestirimci Bakım-Onarım",
            topic_3: "SCADA & MES Sistemleri",
            topic_4: "Endüstriyel Ağ Protokolleri",
            topic_5: "Görüntü İşleme",
            topic_6: "Robotik Süreç Otomasyonu",
            topic_7: "Yapay Zeka & Makine Öğrenmesi",
            topic_8: "Elektrik Pano & PLC",
            works_title: "Veritabanı (Çalışmalarım)",
            btn_open: "[ Dosyayı İncele ]",
            contact_title: "İletişim Portu",
            footer_text: "© 2026 Muhammed Arda Sarı. Sistem Aktif."
        },
        en: {
            nav_home: "Home",
            nav_about: "About Me",
            nav_experience: "Experience",
            nav_skills: "Skills",
            nav_works: "Works",
            nav_contact: "Contact",
            hero_name: "Muhammed Arda Sarı",
            btn_cv: "_Download CV",
            btn_contact: "_Connect (Contact)",
            about_title: "About Me",
            about_text: `I am a candidate specializing in field operations and IT integration in Manufacturing Execution Systems. I transform my mechanical maintenance experience into data analysis with <strong>SQL and Python</strong>, aiming to minimize production losses through predictive maintenance and SCADA processes. As the founder of the <a href="https://uretimingelecegi.vercel.app/" target="_blank" class="cyber-link">Future of Manufacturing Society (FOT-M)</a>, a first in Turkey, I hold the vision of leading sectoral innovations.`,
            exp_title: "Experience",
            exp_1_title: "Kadifeteks | Intern (IT)",
            exp_1_date: "Feb 2026 - Jun 2026",
            exp_1_desc: "Real-time tracking of production data via Manufacturing Execution Systems (MES). Resolving network issues of industrial handheld terminals and field applications of PLC system architecture.",
            exp_2_title: "Plastsonik Makina | Intern",
            exp_2_date: "Aug 2025 - Sep 2025",
            exp_2_desc: "Mechanical assembly of HF machines, electrical panel wiring. Periodic maintenance of field machines, sensor tests, and commissioning.",
            skills_title: "System Competencies",
            topic_1: "Python, Java, C, SQL",
            topic_2: "Predictive Maintenance",
            topic_3: "SCADA & MES Systems",
            topic_4: "Industrial Network Protocols",
            topic_5: "Image Processing",
            topic_6: "Robotic Process Automation",
            topic_7: "AI & Machine Learning",
            topic_8: "Electrical Panels & PLC",
            works_title: "Database (My Works)",
            btn_open: "[ Inspect File ]",
            contact_title: "Communication Port",
            footer_text: "© 2026 Muhammed Arda Sarı. System Active."
        },
        de: {
            nav_home: "Startseite",
            nav_about: "Über Mich",
            nav_experience: "Erfahrung",
            nav_skills: "Fähigkeiten",
            nav_works: "Projekte",
            nav_contact: "Kontakt",
            hero_name: "Muhammed Arda Sarı",
            btn_cv: "_Lebenslauf",
            btn_contact: "_Verbinden",
            about_title: "Über Mich",
            about_text: `Ich bin ein Kandidat, der sich auf Feldoperationen und IT-Integration in MES spezialisiert hat. Ich transformiere meine mechanische Wartungserfahrung mit <strong>SQL und Python</strong> in Datenanalysen. Gründer der <a href="https://uretimingelecegi.vercel.app/" target="_blank" class="cyber-link">Future of Manufacturing Society (FOT-M)</a>.`,
            exp_title: "Erfahrung",
            exp_1_title: "Kadifeteks | Praktikant (IT)",
            exp_1_date: "Feb 2026 - Jun 2026",
            exp_1_desc: "Echtzeit-Verfolgung von Produktionsdaten über MES und SPS-Systemarchitektur.",
            exp_2_title: "Plastsonik Makina | Praktikant",
            exp_2_date: "Aug 2025 - Sep 2025",
            exp_2_desc: "Mechanische Montage und SPS/Schaltschrank-Verkabelung.",
            skills_title: "Systemkompetenzen",
            topic_1: "Python, Java, C, SQL",
            topic_2: "Vorausschauende Wartung",
            topic_3: "SCADA & MES",
            topic_4: "Industrielle Netzwerke",
            topic_5: "Bildverarbeitung",
            topic_6: "RPA",
            topic_7: "KI & Maschinelles Lernen",
            topic_8: "SPS",
            works_title: "Datenbank (Projekte)",
            btn_open: "[ Datei Öffnen ]",
            contact_title: "Kommunikationsport",
            footer_text: "© 2026 Muhammed Arda Sarı. System Aktiv."
        },
        fr: {
            nav_home: "Accueil",
            nav_about: "À Propos",
            nav_experience: "Expérience",
            nav_skills: "Compétences",
            nav_works: "Travaux",
            nav_contact: "Contact",
            hero_name: "Muhammed Arda Sarı",
            btn_cv: "_Télécharger CV",
            btn_contact: "_Connecter",
            about_title: "À Propos",
            about_text: `Candidat spécialisé dans les opérations sur le terrain et l'intégration IT dans les MES. Je transforme mon expérience avec <strong>SQL et Python</strong> en analyse de données. Fondateur de la <a href="https://uretimingelecegi.vercel.app/" target="_blank" class="cyber-link">Future of Manufacturing Society (FOT-M)</a>.`,
            exp_title: "Expérience",
            exp_1_title: "Kadifeteks | Stagiaire (IT)",
            exp_1_date: "Fév 2026 - Juin 2026",
            exp_1_desc: "Suivi en temps réel des données de production via MES.",
            exp_2_title: "Plastsonik Makina | Stagiaire",
            exp_2_date: "Août 2025 - Sep 2025",
            exp_2_desc: "Assemblage mécanique et câblage d'armoires électriques.",
            skills_title: "Compétences Système",
            topic_1: "Python, Java, C, SQL",
            topic_2: "Maintenance Prédictive",
            topic_3: "SCADA & MES",
            topic_4: "Réseaux Industriels",
            topic_5: "Traitement d'Images",
            topic_6: "RPA",
            topic_7: "IA & Machine Learning",
            topic_8: "Automates",
            works_title: "Base de données",
            btn_open: "[ Inspecter ]",
            contact_title: "Port de Communication",
            footer_text: "© 2026 Muhammed Arda Sarı. Système Actif."
        },
        es: {
            nav_home: "Inicio",
            nav_about: "Sobre Mí",
            nav_experience: "Experiencia",
            nav_skills: "Habilidades",
            nav_works: "Portafolio",
            nav_contact: "Contacto",
            hero_name: "Muhammed Arda Sarı",
            btn_cv: "_Descargar CV",
            btn_contact: "_Conectar",
            about_title: "Sobre Mí",
            about_text: `Candidato especializado en operaciones de campo e integración de TI en MES. Transformo mi experiencia de mantenimiento mecánico en análisis de datos con <strong>SQL y Python</strong>. Fundador de la <a href="https://uretimingelecegi.vercel.app/" target="_blank" class="cyber-link">Future of Manufacturing Society (FOT-M)</a>.`,
            exp_title: "Experiencia",
            exp_1_title: "Kadifeteks | Pasante (TI)",
            exp_1_date: "Feb 2026 - Jun 2026",
            exp_1_desc: "Seguimiento en tiempo real de datos de producción vía MES.",
            exp_2_title: "Plastsonik Makina | Pasante",
            exp_2_date: "Ago 2025 - Sep 2025",
            exp_2_desc: "Montaje mecánico y cableado de paneles eléctricos.",
            skills_title: "Competencias del Sistema",
            topic_1: "Python, Java, C, SQL",
            topic_2: "Mantenimiento Predictivo",
            topic_3: "SCADA & MES",
            topic_4: "Redes Industriales",
            topic_5: "Procesamiento de Imágenes",
            topic_6: "RPA",
            topic_7: "IA",
            topic_8: "PLC",
            works_title: "Base de Datos",
            btn_open: "[ Inspeccionar ]",
            contact_title: "Puerto de Comunicación",
            footer_text: "© 2026 Muhammed Arda Sarı. Sistema Activo."
        }
    };

    const flags = document.querySelectorAll('.flag-btn');

    flags.forEach(btn => {
        btn.addEventListener('click', () => {
            flags.forEach(f => f.classList.remove('active'));
            btn.classList.add('active');

            const lang = btn.getAttribute('data-lang');

            document.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.getAttribute('data-translate');
                if (translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });

            const aboutText = document.getElementById('about-text');
            if (aboutText && translations[lang]['about_text']) {
                aboutText.innerHTML = translations[lang]['about_text'];
            }
        });
    });

    // Görünürlük Animasyonları (Scroll)
    const options = { threshold: 0.15 };
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); 
                observer.unobserve(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(revealCallback, options);
    
    document.querySelectorAll('.reveal').forEach(elem => {
        observer.observe(elem);
    });

    // Navbar Scroll Efekti
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(3, 4, 7, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.8)';
            navbar.style.borderBottom = '1px solid rgba(0, 243, 255, 0.4)'; 
        } else {
            navbar.style.background = 'rgba(3, 4, 7, 0.8)';
            navbar.style.boxShadow = 'none';
            navbar.style.borderBottom = '1px solid rgba(0, 243, 255, 0.15)';
        }
    });
});
