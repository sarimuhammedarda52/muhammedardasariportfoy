document.addEventListener('DOMContentLoaded', () => {
    
    // TAM TEŞEKKÜLLÜ 5 DİLLİ SÖZLÜK (Tüm Dosyalar ve Deneyimler İçinde)
    const translations = {
        tr: {
            nav_home: "Anasayfa",
            nav_about: "Hakkımda",
            nav_experience: "Deneyim",
            nav_skills: "Yetkinlikler",
            nav_works: "Çalışmalarım",
            hero_name: "Muhammed Arda Sarı",
            hero_subtitle: "İmalat Yürütme Sistemleri Operatörlüğü & IT Entegrasyonu",
            btn_cv: "CV İndir",
            btn_contact: "Bana Ulaşın",
            about_title: "Hakkımda",
            exp_title: "Deneyim",
            exp_1_title: "Kadifeteks | Bilgi Teknolojileri Stajyeri",
            exp_1_date: "Şubat 2026 - Haziran 2026",
            exp_1_desc: "İmalat Yürütme Sistemleri (MES) üzerinden üretim verilerinin anlık takibi. Endüstriyel el terminallerinin ağ sorunlarının çözümü ve PLC sistem mimarisinin saha uygulamaları.",
            exp_2_title: "Plastsonik Makina | Stajyer",
            exp_2_date: "Ağustos 2025 - Eylül 2025",
            exp_2_desc: "HF makinelerin mekanik montajı ve elektrik pano kablolaması. Saha makinelerinin periyodik bakımı, sensör testleri ve devreye alma operasyonları.",
            skills_title: "Yetkinlikler",
            topic_1: "Python, Java, C, SQL",
            topic_2: "Kestirimci Bakım-Onarım",
            topic_3: "SCADA & MES Sistemleri",
            topic_4: "Endüstriyel Ağ Protokolleri",
            topic_5: "Görüntü İşleme",
            topic_6: "Robotik Süreç Otomasyonu",
            topic_7: "Yapay Zeka & Makine Öğrenmesi",
            topic_8: "Elektrik Pano & PLC",
            works_title: "Çalışmalarım",
            btn_open: "Dosyayı Aç",
            contact_title: "İletişim",
            footer_text: "© 2026 Muhammed Arda Sarı. Tüm hakları saklıdır."
        },
        en: {
            nav_home: "Home",
            nav_about: "About",
            nav_experience: "Experience",
            nav_skills: "Skills",
            nav_works: "Works",
            hero_name: "Muhammed Arda Sarı",
            hero_subtitle: "Manufacturing Execution Systems Operator & IT Integration",
            btn_cv: "Download CV",
            btn_contact: "Contact Me",
            about_title: "About Me",
            exp_title: "Experience",
            exp_1_title: "Kadifeteks | IT Intern",
            exp_1_date: "Feb 2026 - Jun 2026",
            exp_1_desc: "Real-time tracking of production data via MES. Resolving industrial handheld terminal network issues and field applications of PLC system architecture.",
            exp_2_title: "Plastsonik Makina | Intern",
            exp_2_date: "Aug 2025 - Sep 2025",
            exp_2_desc: "Mechanical assembly of HF machines and electrical panel wiring. Periodic maintenance, sensor tests, and system commissioning.",
            skills_title: "Skills",
            topic_1: "Python, Java, C, SQL",
            topic_2: "Predictive Maintenance",
            topic_3: "SCADA & MES Systems",
            topic_4: "Industrial Network Protocols",
            topic_5: "Image Processing",
            topic_6: "Robotic Process Automation",
            topic_7: "AI & Machine Learning",
            topic_8: "Electrical Panel & PLC",
            works_title: "My Works",
            btn_open: "Open File",
            contact_title: "Contact",
            footer_text: "© 2026 Muhammed Arda Sarı. All rights reserved."
        },
        de: {
            nav_home: "Startseite",
            nav_about: "Über Mich",
            nav_experience: "Erfahrung",
            nav_skills: "Fähigkeiten",
            nav_works: "Projekte",
            hero_name: "Muhammed Arda Sarı",
            hero_subtitle: "Manufacturing Execution Systems (MES) & IT-Integration",
            btn_cv: "Lebenslauf",
            btn_contact: "Kontakt",
            about_title: "Über Mich",
            exp_title: "Erfahrung",
            exp_1_title: "Kadifeteks | Praktikant (IT)",
            exp_1_date: "Februar 2026 - Juni 2026",
            exp_1_desc: "Echtzeit-Verfolgung von Produktionsdaten über MES und SPS-Systemarchitektur.",
            exp_2_title: "Plastsonik Makina | Praktikant",
            exp_2_date: "August 2025 - September 2025",
            exp_2_desc: "Mechanische Montage und SPS/Schaltschrank-Verkabelung.",
            skills_title: "Fähigkeiten",
            btn_open: "Datei Öffnen",
            contact_title: "Kontakt",
            footer_text: "© 2026 Muhammed Arda Sarı. Alle Rechte vorbehalten."
        },
        fr: {
            nav_home: "Accueil",
            nav_about: "À Propos",
            nav_experience: "Expérience",
            nav_skills: "Compétences",
            nav_works: "Travaux",
            hero_name: "Muhammed Arda Sarı",
            hero_subtitle: "Sytèmes d'Exécution de la Fabrication (MES) & Intégration IT",
            btn_cv: "Télécharger CV",
            btn_contact: "Contactez-moi",
            about_title: "À Propos",
            exp_title: "Expérience",
            exp_1_title: "Kadifeteks | Stagiaire (IT)",
            exp_1_date: "Février 2026 - Juin 2026",
            exp_1_desc: "Suivi en temps réel des données de production via MES.",
            exp_2_title: "Plastsonik Makina | Stagiaire",
            exp_2_date: "Août 2025 - Septembre 2025",
            exp_2_desc: "Assemblage mécanique et câblage d'armoires électriques.",
            skills_title: "Compétences",
            btn_open: "Ouvrir le Fichier",
            contact_title: "Contact",
            footer_text: "© 2026 Muhammed Arda Sarı. Tous droits réservés."
        },
        es: {
            nav_home: "Inicio",
            nav_about: "Sobre Mí",
            nav_experience: "Experiencia",
            nav_skills: "Habilidades",
            nav_works: "Portafolio",
            hero_name: "Muhammed Arda Sarı",
            hero_subtitle: "Sistemas de Ejecución de Manufactura (MES) & Integración de TI",
            btn_cv: "Descargar CV",
            btn_contact: "Contáctame",
            about_title: "Sobre Mí",
            exp_title: "Experiencia",
            exp_1_title: "Kadifeteks | Pasante (TI)",
            exp_1_date: "Febrero 2026 - Junio 2026",
            exp_1_desc: "Seguimiento en tiempo real de datos de producción vía MES.",
            exp_2_title: "Plastsonik Makina | Pasante",
            exp_2_date: "Agosto 2025 - Septiembre 2025",
            exp_2_desc: "Montaje mecánico y cableado de paneles eléctricos.",
            skills_title: "Habilidades",
            btn_open: "Abrir Archivo",
            contact_title: "Contacto",
            footer_text: "© 2026 Muhammed Arda Sarı. Todos los derechos reservados."
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
                if (translations[lang] && translations[lang][key]) {
                    // Butonların yanındaki ikonları korumak için innerHTML yerine element kontrolü
                    if (el.querySelector('i')) {
                        const icon = el.querySelector('i').outerHTML;
                        el.innerHTML = translations[lang][key] + " " + icon;
                    } else {
                        el.innerHTML = translations[lang][key];
                    }
                }
            });

            const aboutText = document.getElementById('about-text');
            if (aboutText && translations[lang]['about_text']) {
                aboutText.innerHTML = translations[lang]['about_text'];
            }
        });
    });

    // Kusursuz Akışkan Sürükleme Animasyonu (Scroll Reveal)
    const options = { threshold: 0.1, rootMargin: "0px 0px -40px 0px" };
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
});
