document.addEventListener('DOMContentLoaded', () => {
    
    // SADE ÇEVİRİ SÖZLÜĞÜ
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
            btn_open: "İncele &rarr;",
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
            works_title: "Selected Works",
            btn_open: "View &rarr;",
            contact_title: "Contact",
            footer_text: "© 2026 Muhammed Arda Sarı. All rights reserved."
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
                    el.innerHTML = translations[lang][key];
                }
            });
        });
    });

    // Pürüzsüz Scroll Animasyonları (Fade-Up)
    const options = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); 
                observer.unobserve(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(revealCallback, options);
    
    document.querySelectorAll('.fade-up').forEach(elem => {
        observer.observe(elem);
    });

    // Hero bölümünün hemen yüklenmesi için
    setTimeout(() => {
        document.querySelectorAll('#hero .fade-up').forEach(el => el.classList.add('active'));
    }, 100);
});
